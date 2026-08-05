import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiSun, FiMoon, FiMenu, FiX, FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import CommandMenu from "./CommandMenu";

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  const navLinks = [
    { name: t("navbar.home"), href: "#home" },
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.experience"), href: "#experience" },
    { name: t("navbar.projects"), href: "#projects" },
    { name: t("navbar.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandMenuOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const getThemeLabel = () => {
    return theme === "dark"
      ? "Modo Escuro (Clique para alternar para Modo Claro)"
      : "Modo Claro (Clique para alternar para Modo Escuro)";
  };

  const renderThemeIcon = () => {
    return theme === "dark" ? (
      <FiMoon size={18} className="text-indigo-400" />
    ) : (
      <FiSun size={18} className="text-amber-500" />
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-[#070b12]/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm shadow-slate-900/5 dark:shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              className="shrink-0 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="#home"
                className="font-bold text-xl tracking-tight flex items-center gap-1 group"
              >
                <span className="text-blue-600 dark:text-blue-400 font-mono group-hover:-translate-x-0.5 transition-transform">
                  &lt;
                </span>
                <span className="gradient-text font-extrabold">Caio</span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">.Castro</span>
                <span className="text-blue-600 dark:text-blue-400 font-mono group-hover:translate-x-0.5 transition-transform">
                  /&gt;
                </span>
              </a>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}

              <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-800">
                {/* Search / Command Palette Button */}
                <motion.button
                  onClick={() => setIsCommandMenuOpen(true)}
                  whileTap={{ scale: 0.95 }}
                  title="Busca Rápida (Cmd + K)"
                  aria-label="Abrir busca rápida"
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200/50 dark:border-slate-700/50 flex items-center gap-2 text-xs font-mono"
                >
                  <FiSearch size={14} className="text-blue-500" />
                  <span className="hidden lg:inline text-slate-400">Buscar...</span>
                  <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-200 dark:bg-slate-700/80 rounded border border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400">
                    ⌘K
                  </kbd>
                </motion.button>

                <motion.button
                  onClick={toggleTheme}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  title={getThemeLabel()}
                  aria-label={getThemeLabel()}
                  className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/50 dark:border-slate-700/50"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={theme}
                      initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {renderThemeIcon()}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>

                <LanguageSelector />
              </div>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsCommandMenuOpen(true)}
                aria-label="Buscar"
                className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              >
                <FiSearch size={18} />
              </button>

              <LanguageSelector />

              <button
                onClick={toggleTheme}
                aria-label={getThemeLabel()}
                title={getThemeLabel()}
                className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              >
                {renderThemeIcon()}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                className="p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 dark:bg-[#070b12]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 px-4 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <CommandMenu isOpen={isCommandMenuOpen} onClose={() => setIsCommandMenuOpen(false)} />
    </>
  );
};

export default Navbar;
