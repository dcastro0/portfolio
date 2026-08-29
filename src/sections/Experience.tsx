import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { FiBriefcase, FiBookOpen, FiCode, FiCheckCircle, FiCalendar } from "react-icons/fi";

interface TimelineItem {
  id: string;
  year: string;
  type: "work" | "education" | "project";
  titleKey: string;
  organizationKey: string;
  descriptionKey: string;
  highlightsKey: string;
  technologies: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: "aether",
    year: "2025 - 2026",
    type: "project",
    titleKey: "experience.items.aether.title",
    organizationKey: "experience.items.aether.org",
    descriptionKey: "experience.items.aether.desc",
    highlightsKey: "experience.items.aether.highlights",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "tcc",
    year: "2025 - 2026",
    type: "project",
    titleKey: "experience.items.tcc.title",
    organizationKey: "experience.items.tcc.org",
    descriptionKey: "experience.items.tcc.desc",
    highlightsKey: "experience.items.tcc.highlights",
    technologies: ["React Native", "Expo", "Go", "Chi", "PostgreSQL", "SQLite"],
  },
  {
    id: "academic",
    year: "2022 - 2025",
    type: "education",
    titleKey: "experience.items.academic.title",
    organizationKey: "experience.items.academic.org",
    descriptionKey: "experience.items.academic.desc",
    highlightsKey: "experience.items.academic.highlights",
    technologies: ["Engenharia de Software", "Arquitetura REST", "Clean Code", "Git & GitHub"],
  },
];

const Experience = () => {
  const { t } = useTranslation();

  const getIcon = (type: TimelineItem["type"]) => {
    switch (type) {
      case "work":
        return <FiBriefcase className="text-blue-500" size={18} />;
      case "education":
        return <FiBookOpen className="text-indigo-500" size={18} />;
      case "project":
        return <FiCode className="text-cyan-500" size={18} />;
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono mb-2 block">
            {t("experience.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {t("experience.title")}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
            {t("experience.subtitle")}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/80 via-indigo-500/50 to-transparent -z-0" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot Icon */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-6 w-10 h-10 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20 z-10">
                    {getIcon(item.type)}
                  </div>

                  {/* Content Card */}
                  <div
                    className={`pl-14 md:pl-0 w-full md:w-[calc(50%-2.5rem)] ${
                      isEven ? "md:pr-0 md:text-left" : "md:pl-0 md:text-left"
                    }`}
                  >
                    <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-md">
                      {/* Year badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold mb-3">
                        <FiCalendar size={13} />
                        <span>{item.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {t(item.titleKey)}
                      </h3>

                      {/* Organization / Role */}
                      <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold mb-3">
                        {t(item.organizationKey)}
                      </p>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                        {t(item.descriptionKey)}
                      </p>

                      {/* Highlights */}
                      <div className="flex items-start gap-2 mb-4 text-xs text-slate-500 dark:text-slate-400 bg-slate-100/70 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-200/40 dark:border-slate-800/40">
                        <FiCheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span>{t(item.highlightsKey)}</span>
                      </div>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
