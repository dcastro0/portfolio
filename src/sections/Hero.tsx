import { motion } from "motion/react";
import { useTranslation, Trans } from 'react-i18next';
import minhaFoto from "../assets/minhaFoto.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden relative">
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 z-10">
        
        <div className="flex-1 text-center md:text-left">
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="text-blue-600 dark:text-blue-400 font-mono mb-5"
          >
            {t('hero.greeting')}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            Caio de Castro.
          </motion.h1>

          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-3xl md:text-5xl font-bold text-gray-500 dark:text-gray-400 mb-6"
          >
            {t('hero.role')}
          </motion.h2>

          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-8 leading-relaxed"
          >
            <Trans i18nKey="hero.description">
              Especializado em construir soluções completas, desde aplicações 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> web </span> 
              e 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> mobile </span> 
              modernas até 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> APIs </span> 
              robustas e escaláveis. Foco em performance, experiência do usuário e código limpo.
            </Trans>
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25">
              {t('hero.cta_projects')}
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded-md font-medium hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all hover:-translate-y-1">
              {t('hero.cta_contact')}
            </a>
          </motion.div>
        </div>

        <div className="flex-1 flex justify-center items-center relative">
            <motion.div 
               animate={{ 
                 scale: [1, 1.1, 1],
                 rotate: [0, 90, 0] 
               }}
               transition={{ 
                 duration: 20, 
                 repeat: Infinity, 
                 ease: "linear" 
               }}
               className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-linear-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-2xl -z-10"
            />
            
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="w-64 h-64 md:w-80 md:h-80 relative group"
            >
                <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-2xl rotate-6 opacity-50 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gray-300 dark:bg-gray-800 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300 overflow-hidden border-2 border-white dark:border-gray-700">
                    <img 
                      src={minhaFoto} 
                      alt="Foto de Perfil" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;