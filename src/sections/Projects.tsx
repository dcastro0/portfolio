import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiGithub, FiExternalLink, FiX, FiFolder } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { projects } from "../utils/projectsData";

const Projects = () => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

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
          setSelectedId(null);
          return;
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
  }, [selectedId]);

  return (
    <section id="projects" className="py-24 relative flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
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
        </div>
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
                className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl pointer-events-auto max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-800 outline-none"
              >
                <div className="relative">
                  <motion.div
                    layoutId={`image-container-${selectedProject.id}`}
                    className="h-64 sm:h-80 relative"
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
    </section>
  );
};

export default Projects;
