import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
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

  // Build items list
  const sectionActions = [
    {
      id: "nav-home",
      type: "nav",
      title: t("navbar.home"),
      subtitle: "Ir para a página inicial",
      icon: <FiHome size={16} className="text-blue-500" />,
      action: () => {
        window.location.hash = "#home";
        onClose();
      },
    },
    {
      id: "nav-about",
      type: "nav",
      title: t("navbar.about"),
      subtitle: "Conhecer minha trajetória e stack",
      icon: <FiUser size={16} className="text-indigo-500" />,
      action: () => {
        window.location.hash = "#about";
        onClose();
      },
    },
    {
      id: "nav-experience",
      type: "nav",
      title: t("navbar.experience"),
      subtitle: "Formação em Sistemas de Informação e projetos",
      icon: <FiBriefcase size={16} className="text-cyan-500" />,
      action: () => {
        window.location.hash = "#experience";
        onClose();
      },
    },
    {
      id: "nav-projects",
      type: "nav",
      title: t("navbar.projects"),
      subtitle: "Explorar o portfólio de código",
      icon: <FiFolder size={16} className="text-emerald-500" />,
      action: () => {
        window.location.hash = "#projects";
        onClose();
      },
    },
    {
      id: "nav-contact",
      type: "nav",
      title: t("navbar.contact"),
      subtitle: "Enviar mensagem ou proposta",
      icon: <FiMail size={16} className="text-amber-500" />,
      action: () => {
        window.location.hash = "#contact";
        onClose();
      },
    },
    {
      id: "action-cv",
      type: "action",
      title: t("hero.cta_cv"),
      subtitle: "Baixar versão em PDF",
      icon: <FiDownload size={16} className="text-rose-500" />,
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
    title: p.title,
    subtitle: `${p.category} • ${p.technologies.slice(0, 3).join(", ")}`,
    icon: <FiFolder size={16} className="text-blue-400" />,
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
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open handled by parent
        }
      }

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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-md">
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl glass-panel rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden z-10"
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200/60 dark:border-slate-800/80">
            <FiSearch size={18} className="text-blue-500 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar seções, projetos ou tecnologias... (Cmd + K)"
              className="w-full bg-transparent text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none font-medium"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <FiX size={14} />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-1 text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded border border-slate-200/60 dark:border-slate-700/60">
              <FiCommand size={10} /> K
            </kbd>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filteredActions.length === 0 ? (
              <div className="py-8 text-center text-slate-500 dark:text-slate-400 text-sm">
                Nenhum resultado encontrado para &quot;{query}&quot;
              </div>
            ) : (
              filteredActions.map((item, index) => {
                const isSelected = index === selectedIndex;

                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors ${
                      isSelected
                        ? "bg-blue-600/10 dark:bg-blue-500/15 border border-blue-500/30 text-blue-600 dark:text-blue-400"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold truncate">{item.title}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-600 dark:text-blue-300 shrink-0">
                        ↵ Enter
                      </span>
                    )}
                  </button>
                );
              })
            )}
          </div>

          {/* Footer controls hint */}
          <div className="px-4 py-2.5 bg-slate-50/80 dark:bg-slate-900/60 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
            <div className="flex items-center gap-3">
              <span>↑↓ para navegar</span>
              <span>↵ para selecionar</span>
            </div>
            <span>Esc para fechar</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CommandMenu;
