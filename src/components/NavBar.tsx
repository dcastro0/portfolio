import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSearch, FiTerminal } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import CommandMenu from "./CommandMenu";

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);

  const navLinks = [
    { index: "01", name: t("navbar.home"), href: "#home" },
    { index: "02", name: t("navbar.about"), href: "#about" },
    { index: "03", name: t("navbar.experience"), href: "#experience" },
    { index: "04", name: t("navbar.projects"), href: "#projects" },
    { index: "05", name: t("navbar.contact"), href: "#contact" },
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
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-40 transition-all duration-200 border-b ${
          isScrolled
            ? "bg-[#ff6b00]/95 backdrop-blur-md border-black/15 shadow-lg shadow-[#ff6b00]/10"
            : "bg-[#ff6b00] border-black/10"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="shrink-0">
              <a
                href="#home"
                className="font-mono text-sm font-bold tracking-tight flex items-center gap-2 text-[#0f0f0f] hover:opacity-85 transition-opacity duration-150"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#0f0f0f] text-[#ff6b00] border border-black/20 shadow-xs">
                  <FiTerminal size={13} />
                </span>
                <span>caio_castro</span>
                <span className="text-[#0f0f0f]/50">::</span>
                <span className="text-[#0f0f0f]/80 text-xs font-semibold">fullstack</span>
              </a>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 rounded-md text-xs font-mono font-medium text-[#0f0f0f]/90 hover:text-[#0f0f0f] hover:bg-black/10 border border-transparent hover:border-black/15 transition-all duration-150 flex items-center gap-1.5"
                >
                  <span className="text-[#0f0f0f] font-bold">{link.index}.</span>
                  <span>{link.name}</span>
                </a>
              ))}

              <div className="flex items-center gap-2 pl-4 ml-2 border-l border-black/20">
                <button
                  type="button"
                  onClick={() => setIsCommandMenuOpen(true)}
                  title="Busca Rápida (Cmd + K)"
                  aria-label="Abrir busca rápida"
                  className="px-2.5 py-1.5 rounded-md bg-[#0f0f0f] text-[#fffff4] hover:bg-[#1a1a1a] border border-black/30 transition-all duration-150 flex items-center gap-2 text-xs font-mono outline-none shadow-xs cursor-pointer"
                >
                  <FiSearch size={13} className="text-[#ff6b00]" />
                  <span className="hidden lg:inline text-[#fffff4]/80">cmd</span>
                  <kbd className="px-1.5 py-0.5 text-[10px] bg-[#1a1a1a] rounded-md border border-white/20 text-[#fffff4]">
                    ⌘K
                  </kbd>
                </button>

                <LanguageSelector />
              </div>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsCommandMenuOpen(true)}
                aria-label="Buscar"
                className="p-2 rounded-md bg-[#0f0f0f] border border-black/30 text-[#ff6b00] hover:bg-[#1a1a1a] transition-colors duration-150 shadow-xs"
              >
                <FiSearch size={16} />
              </button>

              <LanguageSelector />

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                className="p-2 rounded-md bg-[#0f0f0f] border border-black/30 text-[#fffff4] hover:bg-[#1a1a1a] transition-colors duration-150 shadow-xs"
              >
                {mobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
              </button>
            </div>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#ff6b00] border-b border-black/20 px-4 py-3 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2 px-3 text-xs font-mono font-medium text-[#0f0f0f] hover:bg-black/10 rounded-md transition-colors duration-150"
              >
                <span className="font-bold">{link.index}.</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        )}
      </header>

      <CommandMenu isOpen={isCommandMenuOpen} onClose={() => setIsCommandMenuOpen(false)} />
    </>
  );
};

export default Navbar;
