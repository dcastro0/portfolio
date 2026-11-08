import { useTranslation, Trans } from "react-i18next";
import { FiSmartphone, FiServer, FiDatabase } from "react-icons/fi";
import { motion } from "motion/react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiDocker,
  SiLinux,
  SiGit,
  SiGo,
  SiPostgresql,
  SiGin,
} from "react-icons/si";

const skills = [
  { name: "React", category: "Frontend", icon: SiReact },
  { name: "TypeScript", category: "Language", icon: SiTypescript },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs },
  { name: "Go", category: "Backend", icon: SiGo },
  { name: "Gin", category: "Framework", icon: SiGin },
  { name: "Tailwind CSS", category: "Styling", icon: SiTailwindcss },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
  { name: "Docker", category: "Containers", icon: SiDocker },
  { name: "Linux", category: "System", icon: SiLinux },
  { name: "Git", category: "Versioning", icon: SiGit },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-12 border-b border-[#ff6b00]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-5 mb-8 border-b border-[#ff6b00]/25 gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff6b00] block mb-1">
              02 // {t("about.badge")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#fffff4]">
              {t("about.title")}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#fffff4]/70">SYS.INFO // B.Sc.</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            className="lg:col-span-6 space-y-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-3 text-sm sm:text-base text-[#fffff4]/80 leading-relaxed">
              <p className="font-medium text-[#fffff4]">{t("about.p1")}</p>
              <p>
                <Trans i18nKey="about.p2">
                  Atuando em todo o ciclo{" "}
                  <strong className="text-[#fffff4] font-mono font-semibold">Full Stack</strong>,
                  estruturo desde clientes reativos e persistência offline-first até serviços
                  concorrentes em Go e Node.js sob contratos de dados estritos.
                </Trans>
              </p>
              <p>{t("about.p3")}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <motion.div
                className="p-3.5 rounded-md tech-panel-interactive"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 w-fit rounded-md bg-[#0f0f0f] border border-[#ff6b00]/40 text-[#ff6b00] mb-2.5">
                  <FiSmartphone
                    size={18}
                    aria-label="Frontend & Mobile"
                    role="img"
                    title="Frontend & Mobile"
                  />
                </div>
                <h3 className="font-mono font-semibold text-xs text-[#fffff4] mb-1">
                  Frontend & Mobile
                </h3>
                <p className="text-xs font-mono text-[#fffff4]/70 leading-normal">
                  React, React Native & TS
                </p>
              </motion.div>

              <motion.div
                className="p-3.5 rounded-md tech-panel-interactive"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 w-fit rounded-md bg-[#0f0f0f] border border-[#ff6b00]/40 text-[#ff6b00] mb-2.5">
                  <FiServer
                    size={18}
                    aria-label="Backend & APIs"
                    role="img"
                    title="Backend & APIs"
                  />
                </div>
                <h3 className="font-mono font-semibold text-xs text-[#fffff4] mb-1">
                  Backend & APIs
                </h3>
                <p className="text-xs font-mono text-[#fffff4]/70 leading-normal">
                  Node.js & Go (Golang)
                </p>
              </motion.div>

              <motion.div
                className="p-3.5 rounded-md tech-panel-interactive"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 w-fit rounded-md bg-[#0f0f0f] border border-[#ff6b00]/40 text-[#ff6b00] mb-2.5">
                  <FiDatabase
                    size={18}
                    aria-label="Bancos de Dados"
                    role="img"
                    title="Bancos de Dados"
                  />
                </div>
                <h3 className="font-mono font-semibold text-xs text-[#fffff4] mb-1">
                  Bancos de Dados
                </h3>
                <p className="text-xs font-mono text-[#fffff4]/70 leading-normal">
                  PostgreSQL, MySQL & SQLite
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 tech-panel p-5 rounded-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#ff6b00]/20">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-[#fffff4]">
                {t("about.skills_title")}
              </h3>
              <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-[#0f0f0f] border border-[#ff6b00]/40 text-[#ff6b00]">
                {skills.length} MODULES
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="flex flex-col items-start p-3 rounded-md bg-[#0f0f0f] border border-[#ff6b00]/20 hover:border-[#ff6b00] hover:bg-[#1a1a1a] transition-colors duration-150 group cursor-default"
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <skill.icon
                      size={20}
                      aria-label={skill.name}
                      role="img"
                      title={skill.name}
                      className="text-[#ff6b00] group-hover:scale-110 transition-transform duration-150"
                    />
                    <span className="text-[10px] text-[#fffff4]/60 font-mono">
                      {skill.category}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-semibold text-[#fffff4]">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
