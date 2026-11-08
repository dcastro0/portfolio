import { useTranslation } from "react-i18next";
import { FiBriefcase, FiBookOpen, FiCode, FiCheckCircle, FiCalendar } from "react-icons/fi";
import { motion } from "motion/react";

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
        return <FiBriefcase className="text-[#ff6b00]" size={15} />;
      case "education":
        return <FiBookOpen className="text-[#ff6b00]" size={15} />;
      case "project":
        return <FiCode className="text-[#ff6b00]" size={15} />;
    }
  };

  return (
    <section id="experience" className="py-12 border-b border-[#ff6b00]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-5 mb-8 border-b border-[#ff6b00]/25 gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff6b00] block mb-1">
              03 // {t("experience.badge")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#fffff4]">
              {t("experience.title")}
            </h2>
          </div>
          <p className="text-xs font-mono text-[#fffff4]/70 max-w-md">{t("experience.subtitle")}</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-[#ff6b00]/30" />

          <div className="space-y-4">
            {timelineData.map((item, idx) => (
              <motion.div
                key={item.id}
                className="relative pl-12"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
              >
                <div className="absolute left-0 top-4 w-8 h-8 rounded-md bg-[#161616] border border-[#ff6b00] flex items-center justify-center z-10 shadow-[0_0_10px_rgba(255,107,0,0.15)]">
                  {getIcon(item.type)}
                </div>

                <div className="tech-panel-interactive p-5 rounded-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-[#fffff4]">{t(item.titleKey)}</h3>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#0f0f0f] border border-[#ff6b00]/30 text-[#fffff4] font-mono text-xs">
                      <FiCalendar size={12} className="text-[#ff6b00]" />
                      <span>{item.year}</span>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-[#ff6b00] mb-3">{t(item.organizationKey)}</p>

                  <p className="text-[#fffff4]/80 text-sm leading-relaxed mb-3">
                    {t(item.descriptionKey)}
                  </p>

                  <div className="flex items-start gap-2 mb-3 text-xs font-mono text-[#fffff4] bg-[#0f0f0f] p-2.5 rounded-md border-l-2 border-[#ff6b00]">
                    <FiCheckCircle size={14} className="text-[#ff6b00] mt-0.5 shrink-0" />
                    <span>{t(item.highlightsKey)}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#ff6b00]/15">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 bg-[#0f0f0f] border border-[#ff6b00]/25 text-[#fffff4]/85 hover:text-[#ff6b00] hover:border-[#ff6b00] rounded-md font-mono transition-colors duration-150"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
