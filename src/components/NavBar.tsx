import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const navLinks = [
    { name: t('navbar.home'), href: "#home" },
    { name: t('navbar.about'), href: "#about" },
    { name: t('navbar.projects'), href: "#projects" },
    { name: t('navbar.contact'), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm dark:shadow-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <a href="#home" className="font-bold text-xl tracking-wider flex items-center gap-1">
              <span className="text-blue-600 dark:text-blue-500">&lt;</span>
              Caio
              <span className="text-blue-600 dark:text-blue-500">/&gt;</span>
            </a>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}

            <div className="flex items-center gap-4 pl-4 border-l border-gray-200 dark:border-gray-800">
              <motion.button
                onClick={toggleTheme}
                whileTap={{ scale: 0.9 }}
                whileHover={{ rotate: 20 }}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 transition-colors"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              <motion.button
                 onClick={toggleLanguage}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="text-xs font-semibold px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-full hover:border-blue-500 transition-colors min-w-12"
              >
                 {i18n.language === 'pt' ? 'EN' : 'PT'}
              </motion.button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleLanguage} className="text-xs font-semibold px-2 py-1 border border-gray-300 dark:border-gray-700 rounded-md">
               {i18n.language === 'pt' ? 'EN' : 'PT'}
            </button>
            <button onClick={toggleTheme} className="p-2">
               {theme === "dark" ? <FiSun size={20} className="text-yellow-400"/> : <FiMoon size={20} />}
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;