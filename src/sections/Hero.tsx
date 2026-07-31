import { motion } from "motion/react";
import { useTranslation, Trans } from 'react-i18next';
import { FiArrowRight, FiMail, FiCode, FiLayers, FiCpu } from "react-icons/fi";
import { SiReact, SiTypescript, SiGo } from "react-icons/si";
import minhaFoto from "../assets/minhaFoto.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 relative overflow-hidden">
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 z-10 w-full">
        
        {/* Left Column: Headline & Intro */}
        <div className="flex-1 text-center lg:text-left">
          
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t('hero.badge')}
          </motion.div>
          
          <motion.p 
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="text-slate-500 dark:text-slate-400 font-mono text-sm tracking-wider uppercase mb-2"
          >
            {t('hero.greeting')}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
          >
            Caio de Castro<span className="text-blue-600 dark:text-blue-500">.</span>
          </motion.h1>

          <motion.h2 
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 mb-6 leading-tight"
          >
            <span className="gradient-text">{t('hero.role')}</span>
          </motion.h2>

          <motion.p 
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0"
          >
            <Trans i18nKey="hero.description">
              Especializado na concepção e desenvolvimento de soluções tecnológicas completas, integrando aplicações 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> Web </span> 
              e 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> Mobile </span> 
              modernas a 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> APIs </span> 
              escaláveis e de alta performance.
            </Trans>
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.5 }}
             className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm"
            >
              <span>{t('hero.cta_projects')}</span>
              <FiArrowRight size={18} />
            </a>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-xl font-semibold hover:border-blue-500 dark:hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm shadow-sm"
            >
              <FiMail size={18} className="text-blue-600 dark:text-blue-400" />
              <span>{t('hero.cta_contact')}</span>
            </a>
          </motion.div>

          {/* Highlight Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t border-slate-200/80 dark:border-slate-800/80 max-w-lg mx-auto lg:mx-0 text-left"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold text-sm mb-1">
                <FiCode size={16} />
                <span>Full Stack</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">Web & Mobile</span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-bold text-sm mb-1">
                <FiLayers size={16} />
                <span>REST APIs</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">Node.js & Go</span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-bold text-sm mb-1">
                <FiCpu size={16} />
                <span>Arquitetura</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">Clean Code</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Profile Picture Card & Badges */}
        <div className="flex-1 flex justify-center items-center relative">
          
          {/* Animated Glow Halo */}
          <motion.div 
            animate={{ 
              scale: [1, 1.08, 1],
              rotate: [0, 180, 360] 
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl -z-10"
          />

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Card Container */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl p-2.5 glass-panel shadow-2xl relative group">
              <div className="w-full h-full rounded-xl overflow-hidden relative border border-slate-200/50 dark:border-slate-700/50">
                <img 
                  src={minhaFoto} 
                  alt="Caio de Castro - Foto de Perfil" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-semibold text-white font-mono">Caio de Castro — Software Engineer</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-6 px-3 py-2 rounded-xl glass-panel shadow-lg flex items-center gap-2 text-xs font-medium text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80"
            >
              <SiReact size={18} className="text-[#61DAFB]" />
              <span>React & React Native</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-6 px-3 py-2 rounded-xl glass-panel shadow-lg flex items-center gap-2 text-xs font-medium text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80"
            >
              <SiTypescript size={16} className="text-[#3178C6]" />
              <span>TypeScript</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-8 px-3 py-2 rounded-xl glass-panel shadow-lg flex items-center gap-2 text-xs font-medium text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80"
            >
              <SiGo size={18} className="text-[#00ADD8]" />
              <span>Go (Golang)</span>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;