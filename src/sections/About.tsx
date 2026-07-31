import { motion } from "motion/react";
import { useTranslation, Trans } from 'react-i18next';
import { FiSmartphone, FiServer, FiDatabase } from "react-icons/fi";
import { 
  SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, 
  SiDocker, SiLinux, SiGit, SiPython, SiGo, SiPostgresql
} from "react-icons/si";

const skills = [
  { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", category: "Language", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#339933" },
  { name: "Go", category: "Backend", icon: SiGo, color: "#00ADD8" },
  { name: "Python", category: "Language", icon: SiPython, color: "#3776AB" },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", category: "DevOps", icon: SiDocker, color: "#2496ED" },
  { name: "Linux", category: "System", icon: SiLinux, color: "#FCC624" },
  { name: "Git", category: "Tools", icon: SiGit, color: "#F05032" },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono mb-2 block">
            {t('about.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">{t('about.title')}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="lg:col-span-6 space-y-6"
          >
            <div className="prose prose-slate dark:prose-invert max-w-none text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
              <p className="font-medium text-slate-800 dark:text-slate-100">
                {t('about.p1')}
              </p>
              <p>
                <Trans i18nKey="about.p2">
                  Atuando como desenvolvedor <strong className="text-blue-600 dark:text-blue-400 font-semibold">Full Stack</strong>, domino o ecossistema completo de desenvolvimento, da concepção do front-end intuitivo até o design e implementação de rotas e banco de dados no back-end.
                </Trans>
              </p>
              <p>
                {t('about.p3')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl glass-panel border border-slate-200/80 dark:border-slate-800/80">
                <div className="p-2.5 w-fit rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-3">
                  <FiSmartphone size={20} />
                </div>
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-1">Frontend & Mobile</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">React, React Native & TypeScript</p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-slate-200/80 dark:border-slate-800/80">
                <div className="p-2.5 w-fit rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-3">
                  <FiServer size={20} />
                </div>
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-1">Backend & APIs</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">Node.js, Go & Python</p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-slate-200/80 dark:border-slate-800/80">
                <div className="p-2.5 w-fit rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mb-3">
                  <FiDatabase size={20} />
                </div>
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-1">Bancos de Dados</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">PostgreSQL, MySQL & Docker</p>
              </div>
            </div>

          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80"
          >
            <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-slate-100 flex items-center justify-between">
              <span>{t('about.skills_title')}</span>
              <span className="text-xs font-mono text-slate-400">10 Tecnologias</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="flex flex-col items-center p-3.5 rounded-xl bg-white/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 mb-2 group-hover:scale-110 transition-transform">
                    <skill.icon 
                      size={28} 
                      style={{ color: skill.color }} 
                      className="transition-colors"
                    />
                  </div>
                  
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 text-center">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                    {skill.category}
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