import { motion } from "motion/react";
import { useTranslation, Trans } from 'react-i18next';
import { 
  SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, 
  SiDocker, SiLinux, SiFigma, SiGit, SiPython, SiFlask
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Flask", icon: SiFlask, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900/50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="space-y-6 text-lg text-gray-600 dark:text-gray-300"
          >
            <p>{t('about.p1')}</p>
            <p>
              <Trans i18nKey="about.p2">
                Com experiência em desenvolvimento <strong className="text-blue-600 dark:text-blue-400">Full Stack</strong>, sinto-me confortável navegando tanto no front-end quanto no back-end. Gosto de trabalhar com tecnologias modernas e estou sempre buscando aprender novas ferramentas para melhorar meu fluxo de trabalho.
              </Trans>
            </p>
            <p>{t('about.p3')}</p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center md:text-left">{t('about.skills_title')}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center group relative"
                >
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                    <skill.icon 
                      size={40} 
                      style={{ color: skill.name === 'Flask' && document.documentElement.classList.contains('dark') ? '#FFFFFF' : skill.color }} 
                      className={`filter grayscale group-hover:grayscale-0 transition-all duration-300 ${skill.name === 'Flask' ? 'dark:text-white' : ''}`}
                    />
                  </div>
                  
                  <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium bg-gray-900 text-white px-2 py-1 rounded whitespace-nowrap dark:bg-gray-700">
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