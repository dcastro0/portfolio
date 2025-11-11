import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import { projects } from "../utils/projectsData";

const Projects = () => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="min-h-screen py-20 flex flex-col justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg cursor-pointer group border border-transparent dark:border-gray-800 hover:border-blue-500/50 transition-colors"
            >
              <motion.div layoutId={`image-container-${project.id}`} className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
              
              <motion.div className="p-6">
                <motion.h3 layoutId={`title-${project.id}`} className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </motion.h3>
                <motion.p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {t(project.shortDescriptionKey)}
                </motion.p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
            />
            
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4">
               <motion.div
                layoutId={`card-container-${selectedProject.id}`}
                className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl pointer-events-auto max-h-[90vh] flex flex-col"
              >
                <div className="relative">
                    <motion.div layoutId={`image-container-${selectedProject.id}`} className="h-64 sm:h-80">
                    <img 
                        src={selectedProject.imageUrl} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover"
                    />
                    </motion.div>
                    <button 
                        onClick={() => setSelectedId(null)}
                        className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                        <FiX size={20} />
                    </button>
                </div>

                <div className="p-6 sm:p-8 overflow-y-auto">
                  <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-3xl font-bold mb-4">
                    {selectedProject.title}
                  </motion.h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                    {t(selectedProject.fullDescriptionKey)}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                      {t('projects.modal.technologies')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                            {tech}
                        </span>
                        ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {selectedProject.githubUrl && (
                        <a 
                            href={selectedProject.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md font-medium hover:opacity-90 transition-opacity"
                        >
                            <FiGithub size={20} />
                            {t('projects.modal.code_btn')}
                        </a>
                    )}
                    {selectedProject.liveUrl && (
                        <a 
                            href={selectedProject.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-md font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                        >
                            <FiExternalLink size={20} />
                            {t('projects.modal.demo_btn')}
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