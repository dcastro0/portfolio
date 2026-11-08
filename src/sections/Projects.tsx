import { useState, useEffect, useRef } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiImage,
  FiCpu,
  FiAlertTriangle,
  FiTerminal,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { projects, type ProjectScreenshot, type FilterCategory } from "../utils/projectsData";

const filterCategories: FilterCategory[] = [
  "all",
  "web",
  "mobile",
  "backend",
  "fullstack",
  "financial",
];

const Projects = () => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState<number>(0);
  const [fullscreenImage, setFullscreenImage] = useState<ProjectScreenshot | null>(null);

  const selectedProject = projects.find((p) => p.id === selectedId);
  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((p) => p.filterCategory === activeFilter);

  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setActiveScreenshotIndex(0);
    setFullscreenImage(null);
  }, [selectedId]);

  useEffect(() => {
    if (selectedId !== null) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";

      const focusTimer = setTimeout(() => {
        if (modalRef.current) {
          const focusables = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusables.length > 0) {
            focusables[0].focus();
          }
        }
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          if (fullscreenImage) {
            setFullscreenImage(null);
          } else {
            setSelectedId(null);
          }
          return;
        }

        if (selectedProject?.screenshots && selectedProject.screenshots.length > 0) {
          if (e.key === "ArrowLeft") {
            setActiveScreenshotIndex((prev) =>
              prev > 0 ? prev - 1 : selectedProject.screenshots!.length - 1
            );
          } else if (e.key === "ArrowRight") {
            setActiveScreenshotIndex((prev) =>
              prev < selectedProject.screenshots!.length - 1 ? prev + 1 : 0
            );
          }
        }

        if (e.key === "Tab" && modalRef.current) {
          const focusables = Array.from(
            modalRef.current.querySelectorAll<HTMLElement>(
              'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
          );

          if (focusables.length === 0) {
            e.preventDefault();
            return;
          }

          const firstElement = focusables[0];
          const lastElement = focusables[focusables.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        clearTimeout(focusTimer);
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [selectedId, selectedProject, fullscreenImage]);

  return (
    <section id="projects" className="py-12 border-b border-[#ff6b00]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-5 mb-8 border-b border-[#ff6b00]/25 gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff6b00] block mb-1">
              04 // {t("projects.badge")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#fffff4]">
              {t("projects.title")}
            </h2>
          </div>
          <p className="text-xs font-mono text-[#fffff4]/70 max-w-md">{t("projects.subtitle")}</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#ff6b00]/15">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#ff6b00]">
              {t("projects.filter_label")}
            </span>
            <span className="text-xs font-mono text-[#fffff4]/70">
              ({filteredProjects.length}/{projects.length})
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat) => {
              const count =
                cat === "all"
                  ? projects.length
                  : projects.filter((p) => p.filterCategory === cat).length;
              const isActive = activeFilter === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-150 flex items-center gap-2 border outline-none ${
                    isActive
                      ? "bg-[#ff6b00] text-[#0f0f0f] border-[#ff6b00] font-bold shadow-[0_0_12px_rgba(255,107,0,0.3)]"
                      : "bg-[#161616] text-[#fffff4]/80 border-[#ff6b00]/20 hover:border-[#ff6b00] hover:text-[#ff6b00]"
                  }`}
                >
                  <span>{t(`projects.filters.${cat}`)}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md font-bold ${
                      isActive ? "bg-[#0f0f0f] text-[#ff6b00]" : "bg-[#0f0f0f] text-[#ff6b00]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="tech-panel-interactive rounded-lg overflow-hidden flex flex-col h-full group"
            >
              <div className="flex items-center justify-between px-4 py-2 bg-[#0f0f0f] border-b border-[#ff6b00]/20 font-mono text-[11px]">
                <div className="flex items-center gap-2 text-[#ff6b00]">
                  <FiTerminal size={12} />
                  <span className="font-semibold text-[#fffff4]">{project.code}</span>
                </div>
                <span className="text-[#fffff4]/70">{project.category}</span>
              </div>

              <div
                onClick={() => setSelectedId(project.id)}
                className="h-36 overflow-hidden relative border-b border-[#ff6b00]/20 bg-[#0f0f0f] cursor-pointer"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={337}
                  loading={index === 0 ? "eager" : "lazy"}
                  {...(index === 0 ? { fetchPriority: "high" } : {})}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
                {project.screenshots && project.screenshots.length > 0 && (
                  <span className="absolute bottom-2 right-2 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#0f0f0f]/95 text-[#ff6b00] border border-[#ff6b00]/50 flex items-center gap-1 shadow-sm">
                    <FiImage size={11} />
                    {project.screenshots.length} TELAS
                  </span>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      onClick={() => setSelectedId(project.id)}
                      className="text-base font-bold text-[#fffff4] group-hover:text-[#ff6b00] transition-colors duration-150 cursor-pointer"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-md bg-[#0f0f0f] border border-[#ff6b00]/20">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#ff6b00] mb-1">
                        <FiAlertTriangle size={11} />
                        <span>{t("projects.card.problem_label")}</span>
                      </div>
                      <p className="text-xs text-[#fffff4]/80 leading-relaxed">
                        {t(project.problemKey)}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-md bg-[#0f0f0f] border border-[#ff6b00]/30">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#ff6b00] mb-1">
                        <FiCpu size={11} />
                        <span>{t("projects.card.arch_label")}</span>
                      </div>
                      <p className="text-xs font-mono text-[#fffff4] leading-relaxed">
                        {t(project.architectureKey)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 bg-[#0f0f0f] border border-[#ff6b00]/25 rounded-md text-[#fffff4]/80 hover:text-[#ff6b00] hover:border-[#ff6b00] transition-colors duration-150"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-3 border-t border-[#ff6b00]/20">
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#0f0f0f] hover:bg-[#1f1f1f] text-[#fffff4] border border-[#ff6b00]/30 hover:border-[#ff6b00] hover:text-[#ff6b00] text-xs font-mono transition-colors duration-150"
                        >
                          <FiGithub size={13} className="text-[#ff6b00]" />
                          <span>{t("projects.card.repo_btn")}</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#ff6b00] hover:bg-[#ff6b00]/90 text-[#0f0f0f] border border-[#ff6b00] text-xs font-mono font-bold shadow-[0_0_10px_rgba(255,107,0,0.25)] transition-colors duration-150"
                        >
                          <FiExternalLink size={13} />
                          <span>{t("projects.card.demo_btn")}</span>
                        </a>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedId(project.id)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-[#0f0f0f] hover:bg-[#1f1f1f] text-[#fffff4]/80 hover:text-[#ff6b00] border border-[#ff6b00]/25 hover:border-[#ff6b00] text-xs font-mono transition-colors duration-150"
                    >
                      <FiMaximize2 size={12} className="text-[#ff6b00]" />
                      <span>{t("projects.card.inspect_btn")}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <>
            <motion.div
              onClick={() => setSelectedId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-xs z-50 cursor-pointer"
            />

            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4 sm:p-6">
              <motion.div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`title-${selectedProject.id}`}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-4xl bg-[#161616] rounded-lg overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col border border-[#ff6b00]/60 shadow-[0_10px_40px_rgba(0,0,0,0.8)] outline-none"
              >
                <div className="flex items-center justify-between px-5 py-3 bg-[#0f0f0f] border-b border-[#ff6b00]/20">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded-md bg-[#161616] border border-[#ff6b00]/50 text-[#ff6b00] font-semibold">
                      {selectedProject.code}
                    </span>
                    <span className="text-[#fffff4]/70">{selectedProject.category}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedId(null)}
                    aria-label="Fechar detalhes do projeto"
                    className="p-1.5 bg-[#161616] hover:bg-[#1f1f1f] text-[#fffff4]/80 hover:text-[#ff6b00] rounded-md transition-colors duration-150 border border-[#ff6b00]/30 hover:border-[#ff6b00]"
                  >
                    <FiX size={16} />
                  </button>
                </div>

                <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
                  <div>
                    <h3
                      id={`title-${selectedProject.id}`}
                      className="text-xl sm:text-2xl font-bold text-[#fffff4] mb-2"
                    >
                      {selectedProject.title}
                    </h3>
                    <p className="text-[#fffff4]/80 text-sm leading-relaxed">
                      {t(selectedProject.fullDescriptionKey)}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-md bg-[#0f0f0f] border border-[#ff6b00]/25">
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#ff6b00] mb-1.5">
                        <FiAlertTriangle size={13} />
                        <span>{t("projects.card.problem_label")}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#fffff4]/80 leading-relaxed">
                        {t(selectedProject.problemKey)}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-md bg-[#0f0f0f] border border-[#ff6b00]/35">
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#ff6b00] mb-1.5">
                        <FiCpu size={13} />
                        <span>{t("projects.card.arch_label")}</span>
                      </div>
                      <p className="text-xs sm:text-sm font-mono text-[#fffff4] leading-relaxed">
                        {t(selectedProject.architectureKey)}
                      </p>
                    </div>
                  </div>

                  {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                    <div className="space-y-3 pt-3 border-t border-[#ff6b00]/20">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-[#ff6b00] flex items-center gap-2">
                          <FiImage size={14} />
                          {t("projects.modal.screenshots_title")}
                        </h4>
                        <span className="text-xs font-mono text-[#fffff4] bg-[#0f0f0f] px-2.5 py-0.5 rounded-md border border-[#ff6b00]/40">
                          {activeScreenshotIndex + 1} / {selectedProject.screenshots.length}
                        </span>
                      </div>

                      <div className="relative group rounded-md overflow-hidden bg-[#0f0f0f] border border-[#ff6b00]/30 aspect-[16/10] sm:aspect-video flex items-center justify-center">
                        <img
                          src={selectedProject.screenshots[activeScreenshotIndex].url}
                          alt={selectedProject.screenshots[activeScreenshotIndex].title}
                          className="w-full h-full object-contain cursor-zoom-in"
                          onClick={() =>
                            setFullscreenImage(selectedProject.screenshots![activeScreenshotIndex])
                          }
                        />

                        <div className="absolute bottom-0 inset-x-0 bg-[#0f0f0f]/95 border-t border-[#ff6b00]/20 px-3 py-2 flex items-center justify-between text-[#fffff4] pointer-events-none">
                          <span className="text-xs font-mono">
                            {selectedProject.screenshots[activeScreenshotIndex].title}
                          </span>
                          <span className="text-[11px] font-mono text-[#fffff4]/75 flex items-center gap-1">
                            <FiMaximize2 size={11} className="text-[#ff6b00]" />
                            {t("projects.modal.click_to_enlarge")}
                          </span>
                        </div>

                        {selectedProject.screenshots.length > 1 && (
                          <>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveScreenshotIndex((prev) =>
                                  prev > 0 ? prev - 1 : selectedProject.screenshots!.length - 1
                                );
                              }}
                              aria-label="Imagem anterior"
                              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-md bg-[#0f0f0f]/90 hover:bg-[#1f1f1f] text-[#fffff4] hover:text-[#ff6b00] transition-colors duration-150 border border-[#ff6b00]/40"
                            >
                              <FiChevronLeft size={18} />
                            </button>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveScreenshotIndex((prev) =>
                                  prev < selectedProject.screenshots!.length - 1 ? prev + 1 : 0
                                );
                              }}
                              aria-label="Próxima imagem"
                              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md bg-[#0f0f0f]/90 hover:bg-[#1f1f1f] text-[#fffff4] hover:text-[#ff6b00] transition-colors duration-150 border border-[#ff6b00]/40"
                            >
                              <FiChevronRight size={18} />
                            </button>
                          </>
                        )}
                      </div>

                      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                        {selectedProject.screenshots.map((screen, idx) => (
                          <button
                            key={screen.url}
                            type="button"
                            onClick={() => setActiveScreenshotIndex(idx)}
                            className={`relative rounded-md overflow-hidden aspect-video border transition-all duration-150 ${
                              activeScreenshotIndex === idx
                                ? "border-[#ff6b00] ring-1 ring-[#ff6b00] opacity-100"
                                : "border-[#ff6b00]/25 opacity-60 hover:opacity-100 hover:border-[#ff6b00]"
                            }`}
                          >
                            <img
                              src={screen.url}
                              alt={screen.title}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#ff6b00] mb-2">
                      {t("projects.modal.technologies")}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-[#0f0f0f] border border-[#ff6b00]/30 text-[#fffff4] rounded-md text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4 border-t border-[#ff6b00]/20">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0f0f0f] hover:bg-[#1f1f1f] text-[#fffff4] border border-[#ff6b00]/30 hover:border-[#ff6b00] hover:text-[#ff6b00] rounded-md font-mono text-xs transition-colors duration-150"
                      >
                        <FiGithub size={15} className="text-[#ff6b00]" />
                        <span>{t("projects.modal.code_btn")}</span>
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#ff6b00] hover:bg-[#ff6b00]/90 text-[#0f0f0f] border border-[#ff6b00] rounded-md font-mono font-bold text-xs shadow-[0_0_12px_rgba(255,107,0,0.25)] transition-colors duration-150"
                      >
                        <FiExternalLink size={15} />
                        <span>{t("projects.modal.demo_btn")}</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImage(null)}
            className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setFullscreenImage(null)}
                aria-label="Fechar visualização em tela cheia"
                className="absolute -top-11 right-0 p-2 bg-[#161616] hover:bg-[#1f1f1f] text-[#fffff4] hover:text-[#ff6b00] rounded-md transition-colors duration-150 border border-[#ff6b00]/40"
              >
                <FiX size={18} />
              </button>

              <img
                src={fullscreenImage.url}
                alt={fullscreenImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-md border border-[#ff6b00]/30 shadow-2xl"
              ></img>

              <div className="mt-3 text-center">
                <h3 className="text-[#fffff4] font-mono text-sm">{fullscreenImage.title}</h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
