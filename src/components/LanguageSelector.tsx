import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiGlobe, FiChevronDown, FiCheck } from "react-icons/fi";
import { LANGUAGES } from "../utils/constants";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((lang) => lang.code === i18n.language) || LANGUAGES[0];

  const handleSelectLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1.5 bg-[#161616] text-[#fffff4] border border-[#ff6b00]/25 rounded-md hover:border-[#ff6b00] hover:bg-[#1f1f1f] focus-visible:border-[#ff6b00] transition-all duration-150 outline-none cursor-pointer"
        aria-expanded={isOpen}
        aria-label="Selecionar idioma"
      >
        <FiGlobe size={13} className="text-[#ff6b00]" />
        <span className="uppercase tracking-wider">{currentLang.code}</span>
        <FiChevronDown
          size={13}
          className={`text-[#fffff4]/70 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-40 rounded-md bg-[#161616] border border-[#ff6b00]/40 p-1 z-50 shadow-xl">
          <div className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[#ff6b00] border-b border-[#ff6b00]/20 mb-1">
            LOCALE
          </div>
          <div className="space-y-0.5">
            {LANGUAGES.map((lang) => {
              const isActive = lang.code === currentLang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 text-xs font-mono rounded-md transition-colors duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#0f0f0f] text-[#ff6b00] border border-[#ff6b00]/50 font-semibold"
                      : "text-[#fffff4]/80 hover:text-[#fffff4] hover:bg-[#1f1f1f] border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="uppercase text-[11px] text-[#ff6b00]">{lang.code}</span>
                    <span>{lang.name}</span>
                  </div>
                  {isActive && <FiCheck size={13} className="text-[#ff6b00]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
