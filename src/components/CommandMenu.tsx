import { useState, useEffect, useRef } from "react";
import {
  FiSearch,
  FiX,
  FiFolder,
  FiUser,
  FiBriefcase,
  FiMail,
  FiHome,
  FiDownload,
  FiCommand,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../utils/projectsData";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandMenu = ({ isOpen, onClose }: CommandMenuProps) => {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const isPt = i18n.language?.startsWith("pt");
  const cvPath = isPt
    ? "/documents/Curr%C3%ADculo%20-%20Caio%20Correa%20de%20Castro.pdf"
    : "/documents/Resume%20-%20Caio%20Correa%20de%20Castro.pdf";
  const cvFileName = isPt
    ? "Currículo - Caio Correa de Castro.pdf"
    : "Resume - Caio Correa de Castro.pdf";

  const sectionActions = [
    {
      id: "nav-home",
      type: "nav",
      title: t("navbar.home"),
      subtitle: "#home",
      icon: <FiHome size={15} className="text-[#ff6b00]" />,
      action: () => {
        window.location.hash = "#home";
        onClose();
      },
    },
    {
      id: "nav-about",
      type: "nav",
      title: t("navbar.about"),
      subtitle: "#about",
      icon: <FiUser size={15} className="text-[#ff6b00]" />,
      action: () => {
        window.location.hash = "#about";
        onClose();
      },
    },
    {
      id: "nav-experience",
      type: "nav",
      title: t("navbar.experience"),
      subtitle: "#experience",
      icon: <FiBriefcase size={15} className="text-[#ff6b00]" />,
      action: () => {
        window.location.hash = "#experience";
        onClose();
      },
    },
    {
      id: "nav-projects",
      type: "nav",
      title: t("navbar.projects"),
      subtitle: "#projects",
      icon: <FiFolder size={15} className="text-[#ff6b00]" />,
      action: () => {
        window.location.hash = "#projects";
        onClose();
      },
    },
    {
      id: "nav-contact",
      type: "nav",
      title: t("navbar.contact"),
      subtitle: "#contact",
      icon: <FiMail size={15} className="text-[#ff6b00]" />,
      action: () => {
        window.location.hash = "#contact";
        onClose();
      },
    },
    {
      id: "action-cv",
      type: "action",
      title: t("hero.cta_cv"),
      subtitle: "PDF Document",
      icon: <FiDownload size={15} className="text-[#ff6b00]" />,
      action: () => {
        const link = document.createElement("a");
        link.href = cvPath;
        link.download = cvFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onClose();
      },
    },
  ];

  const projectActions = projects.map((p) => ({
    id: `project-${p.id}`,
    type: "project",
    title: `[${p.code}] ${p.title}`,
    subtitle: `${p.category} // ${p.technologies.join(", ")}`,
    icon: <FiFolder size={15} className="text-[#ff6b00]" />,
    action: () => {
      window.location.hash = "#projects";
      onClose();
    },
  }));

  const allActions = [...sectionActions, ...projectActions];

  const filteredActions = query.trim()
    ? allActions.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase())
      )
    : allActions;

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 30);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filteredActions.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredActions.length - 1));
      } else if (e.key === "Enter" && filteredActions[selectedIndex]) {
        e.preventDefault();
        filteredActions[selectedIndex].action();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xs cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl bg-[#161616] rounded-lg border border-[#ff6b00]/50 overflow-hidden z-10 shadow-2xl"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#ff6b00]/20 bg-[#0f0f0f]">
              <FiSearch size={16} className="text-[#ff6b00] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filtrar seções, sistemas ou stack... (Cmd + K)"
                className="w-full bg-transparent text-xs font-mono text-[#fffff4] placeholder-[#fffff4]/40 focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="p-1 rounded-md text-[#fffff4]/70 hover:text-[#ff6b00] transition-colors duration-150 cursor-pointer"
                >
                  <FiX size={14} />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono bg-[#161616] text-[#fffff4]/80 rounded-md border border-[#ff6b00]/40">
                <FiCommand size={10} /> K
              </kbd>
            </div>

            <div className="max-h-80 overflow-y-auto p-1.5 space-y-1">
              {filteredActions.length === 0 ? (
                <div className="py-6 text-center text-[#fffff4]/60 font-mono text-xs">
                  0 resultados para &quot;{query}&quot;
                </div>
              ) : (
                filteredActions.map((item, index) => {
                  const isSelected = index === selectedIndex;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-left transition-colors duration-150 border cursor-pointer ${
                        isSelected
                          ? "bg-[#0f0f0f] border-[#ff6b00] text-[#fffff4]"
                          : "text-[#fffff4]/80 hover:bg-[#1a1a1a] border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-1.5 rounded-md bg-[#0f0f0f] border border-[#ff6b00]/30 shrink-0">
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-mono font-semibold text-[#fffff4] truncate">
                            {item.title}
                          </p>
                          <p className="text-[11px] font-mono text-[#fffff4]/65 truncate">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      {isSelected && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-[#ff6b00] text-[#0f0f0f] font-bold shrink-0">
                          ↵ ENTER
                        </span>
                      )}
                    </button>
                  );
                })
              )}
            </div>

            <div className="px-4 py-2 bg-[#0f0f0f] border-t border-[#ff6b00]/20 flex items-center justify-between text-[11px] text-[#fffff4]/70 font-mono">
              <div className="flex items-center gap-3">
                <span>[↑↓] navegar</span>
                <span>[↵] abrir</span>
              </div>
              <span>[ESC] fechar</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandMenu;
