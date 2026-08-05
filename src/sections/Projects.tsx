import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FiGithub,
  FiExternalLink,
  FiX,
  FiFolder,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiImage,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";
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
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [selectedId, fullscreenImage, selectedProject]);

  return (
    <section id="projects" className="py-24 relative flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono mb-2 block">
            {t("projects.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
            {t("projects.subtitle")}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat;
            const count =
              cat === "all"
                ? projects.length
                : projects.filter((p) => p.filterCategory === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 outline-none ${
                  isActive
                    ? "text-white shadow-md shadow-blue-500/25"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-800/60 hover:bg-slate-200/80 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800/60"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{t(`projects.filters.${cat}`)}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                layoutId={`card-container-${project.id}`}
                onClick={() => setSelectedId(project.id)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden cursor-pointer group flex flex-col h-full border border-slate-200/80 dark:border-slate-800/80"
              >
                <motion.div
                  layoutId={`image-container-${project.id}`}
                  className="h-52 overflow-hidden relative"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={337}
                    loading={index === 0 ? "eager" : "lazy"}
                    {...(index === 0 ? { fetchPriority: "high" } : {})}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  <span className="absolute top-3 left-3 text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-900/80 text-white backdrop-blur-md border border-white/10">
                    {project.category}
                  </span>

                  {project.screenshots && project.screenshots.length > 0 && (
                    <span className="absolute bottom-3 right-3 text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-blue-600/90 text-white backdrop-blur-md flex items-center gap-1 shadow-sm">
                      <FiImage size={11} />
                      {project.screenshots.length} prints
                    </span>
                  )}
                </motion.div>

                <motion.div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400 font-mono text-xs">
                      <FiFolder size={14} />
                      <span>Project #{project.id}</span>
                    </div>

                    <motion.h3
                      layoutId={`title-${project.id}`}
                      className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p className="text-slate-600 dark:text-slate-300 text-sm mb-6 line-clamp-2 leading-relaxed">
                      {t(project.shortDescriptionKey)}
                    </motion.p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 rounded-md text-slate-600 dark:text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 rounded-md text-slate-500 dark:text-slate-400 font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 cursor-pointer"
            />

            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4 sm:p-6">
              <motion.div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`title-${selectedProject.id}`}
                layoutId={`card-container-${selectedProject.id}`}
                className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl pointer-events-auto max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-800 outline-none"
              >
                <div className="relative">
                  <motion.div
                    layoutId={`image-container-${selectedProject.id}`}
                    className="h-56 sm:h-72 relative"
                  >
                    <img
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      width={768}
                      height={320}
                      loading="eager"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  </motion.div>

                  <button
                    onClick={() => setSelectedId(null)}
                    aria-label="Fechar detalhes do projeto"
                    className="absolute top-4 right-4 p-2.5 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full transition-colors border border-white/20 backdrop-blur-md"
                  >
                    <FiX size={18} />
                  </button>

                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="text-xs font-mono font-medium px-3 py-1 rounded-md bg-blue-600 text-white">
                      {selectedProject.category}
                    </span>
                    <motion.h3
                      id={`title-${selectedProject.id}`}
                      layoutId={`title-${selectedProject.id}`}
                      className="text-2xl sm:text-3xl font-extrabold text-white mt-2"
                    >
                      {selectedProject.title}
                    </motion.h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                  <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                    {t(selectedProject.fullDescriptionKey)}
                  </p>

                  {/* Screenshots Showcase Gallery */}
                  {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                    <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-2">
                          <FiImage size={14} className="text-blue-500" />
                          {t("projects.modal.screenshots_title")}
                        </h4>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
                          {activeScreenshotIndex + 1} / {selectedProject.screenshots.length}
                        </span>
                      </div>

                      {/* Main Interactive Viewer */}
                      <div className="relative group rounded-xl overflow-hidden bg-slate-950 border border-slate-200/50 dark:border-slate-800 aspect-[16/10] sm:aspect-video flex items-center justify-center">
                        <motion.img
                          key={activeScreenshotIndex}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.25 }}
                          src={selectedProject.screenshots[activeScreenshotIndex].url}
                          alt={selectedProject.screenshots[activeScreenshotIndex].title}
                          className="w-full h-full object-contain cursor-zoom-in"
                          onClick={() =>
                            setFullscreenImage(selectedProject.screenshots![activeScreenshotIndex])
                          }
                        />

                        {/* Caption Overlay */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4 flex items-center justify-between text-white pointer-events-none">
                          <span className="text-xs sm:text-sm font-medium tracking-wide">
                            {selectedProject.screenshots[activeScreenshotIndex].title}
                          </span>
                          <span className="text-[10px] sm:text-xs font-mono opacity-80 flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded backdrop-blur-sm">
                            <FiMaximize2 size={11} />
                            {t("projects.modal.click_to_enlarge")}
                          </span>
                        </div>

                        {/* Navigation Arrows */}
                        {selectedProject.screenshots.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveScreenshotIndex((prev) =>
                                  prev > 0 ? prev - 1 : selectedProject.screenshots!.length - 1
                                );
                              }}
                              aria-label="Imagem anterior"
                              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition-all backdrop-blur-md opacity-80 group-hover:opacity-100 border border-white/10"
                            >
                              <FiChevronLeft size={20} />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveScreenshotIndex((prev) =>
                                  prev < selectedProject.screenshots!.length - 1 ? prev + 1 : 0
                                );
                              }}
                              aria-label="Próxima imagem"
                              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition-all backdrop-blur-md opacity-80 group-hover:opacity-100 border border-white/10"
                            >
                              <FiChevronRight size={20} />
                            </button>
                          </>
                        )}
                      </div>

                      {/* Thumbnails Row */}
                      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                        {selectedProject.screenshots.map((screen, idx) => (
                          <button
                            key={screen.url}
                            onClick={() => setActiveScreenshotIndex(idx)}
                            className={`relative rounded-lg overflow-hidden aspect-video border-2 transition-all ${
                              activeScreenshotIndex === idx
                                ? "border-blue-500 shadow-md shadow-blue-500/20 scale-[1.03]"
                                : "border-transparent opacity-60 hover:opacity-100"
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
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono mb-3">
                      {t("projects.modal.technologies")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:opacity-90 transition-opacity text-sm shadow-md"
                      >
                        <FiGithub size={18} />
                        <span>{t("projects.modal.code_btn")}</span>
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm"
                      >
                        <FiExternalLink size={18} />
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

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImage(null)}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-[100] flex flex-col items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setFullscreenImage(null)}
                aria-label="Fechar visualização em tela cheia"
                className="absolute -top-12 right-0 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md border border-white/20"
              >
                <FiX size={22} />
              </button>

              <img
                src={fullscreenImage.url}
                alt={fullscreenImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />

              <div className="mt-4 text-center">
                <h3 className="text-white font-semibold text-base sm:text-lg">
                  {fullscreenImage.title}
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
