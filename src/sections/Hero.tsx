import { useTranslation, Trans } from "react-i18next";
import { FiArrowRight, FiMail, FiCode, FiLayers, FiCpu, FiDownload } from "react-icons/fi";
import { SiReact, SiTypescript, SiGo } from "react-icons/si";
import { motion } from "motion/react";
import minhaFoto from "../assets/minhaFoto.jpg";

const ProfileCard = () => (
  <div className="tech-panel rounded-lg p-3">
    <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#ff6b00]/20 font-mono text-[11px] text-[#fffff4]/80">
      <span>SYS_PROFILE // CAIO.CASTRO</span>
      <span className="flex items-center gap-1.5 text-[#ff6b00]">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff6b00] animate-pulse" />
        ONLINE
      </span>
    </div>

    <div className="aspect-square w-full rounded-md overflow-hidden border border-[#ff6b00]/30 bg-[#0f0f0f] mb-3">
      <img
        src={minhaFoto}
        alt="Caio de Castro - Foto de Perfil"
        width={320}
        height={320}
        fetchPriority="high"
        loading="eager"
        className="w-full h-full object-cover transition-all duration-200"
      />
    </div>

    <div className="space-y-1.5 font-mono text-xs">
      <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md bg-[#0f0f0f] border border-[#ff6b00]/20 text-[#fffff4]">
        <span className="flex items-center gap-2">
          <SiReact size={13} className="text-[#ff6b00]" />
          <span>React & React Native</span>
        </span>
        <span className="text-[10px] text-[#ff6b00] font-semibold">UI/CLIENT</span>
      </div>

      <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md bg-[#0f0f0f] border border-[#ff6b00]/20 text-[#fffff4]">
        <span className="flex items-center gap-2">
          <SiTypescript size={13} className="text-[#ff6b00]" />
          <span>TypeScript</span>
        </span>
        <span className="text-[10px] text-[#ff6b00] font-semibold">STRICT</span>
      </div>

      <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md bg-[#0f0f0f] border border-[#ff6b00]/20 text-[#fffff4]">
        <span className="flex items-center gap-2">
          <SiGo size={14} className="text-[#ff6b00]" />
          <span>Go (Golang)</span>
        </span>
        <span className="text-[10px] text-[#ff6b00] font-semibold">BACKEND</span>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const { t, i18n } = useTranslation();

  const isPt = i18n.language?.startsWith("pt");
  const cvPath = isPt
    ? "/documents/Curr%C3%ADculo%20-%20Caio%20Correa%20de%20Castro.pdf"
    : "/documents/Resume%20-%20Caio%20Correa%20de%20Castro.pdf";
  const cvFileName = isPt
    ? "Currículo - Caio Correa de Castro.pdf"
    : "Resume - Caio Correa de Castro.pdf";

  return (
    <section
      id="home"
      className="min-h-screen min-h-[100dvh] flex items-center justify-center pt-20 pb-12 sm:pt-24 sm:pb-16 border-b border-[#ff6b00]/20 relative overflow-hidden w-full"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[350px] sm:h-[450px] bg-[#ff6b00]/10 blur-[130px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <motion.div
            className="lg:col-span-8 text-left"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-[#161616] border border-[#ff6b00]/40 text-[#fffff4] text-xs font-mono mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]" />
              </span>
              <span>{t("hero.badge")}</span>
            </div>

            <p className="text-[#ff6b00] font-mono text-xs tracking-widest uppercase mb-2">
              {t("hero.greeting")}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#fffff4] mb-2">
              Caio de Castro<span className="text-[#ff6b00]">.</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-mono font-semibold text-[#fffff4]/85 mb-5">
              {t("hero.role")}
            </h2>

            <p className="text-sm sm:text-base text-[#fffff4]/80 max-w-2xl mb-7 leading-relaxed">
              <Trans i18nKey="hero.description">
                Desenvolvimento de sistemas distribuídos, aplicações
                <span className="text-[#fffff4] font-mono font-semibold"> Web </span>e
                <span className="text-[#fffff4] font-mono font-semibold"> Mobile </span>
                tipadas ponta a ponta e
                <span className="text-[#fffff4] font-mono font-semibold"> APIs </span>
                RESTful de baixa latência em Node.js e Go.
              </Trans>
            </p>

            {/* Profile photo in mobile placed directly below the summary */}
            <div className="lg:hidden mb-7 max-w-xs sm:max-w-sm mx-auto">
              <ProfileCard />
            </div>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff6b00] hover:bg-[#ff6b00]/90 text-[#0f0f0f] rounded-md font-mono font-bold text-xs border border-[#ff6b00] shadow-[0_0_15px_rgba(255,107,0,0.25)] transition-colors duration-150"
              >
                <span>{t("hero.cta_projects")}</span>
                <FiArrowRight size={15} />
              </motion.a>

              <motion.a
                href={cvPath}
                download={cvFileName}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#161616] hover:bg-[#1f1f1f] text-[#fffff4] hover:text-[#ff6b00] border border-[#ff6b00]/30 hover:border-[#ff6b00] rounded-md font-mono font-medium text-xs transition-colors duration-150"
              >
                <FiDownload size={15} className="text-[#ff6b00]" />
                <span>{t("hero.cta_cv")}</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#161616] hover:bg-[#1f1f1f] text-[#fffff4]/85 hover:text-[#ff6b00] border border-[#ff6b00]/30 hover:border-[#ff6b00] rounded-md font-mono font-medium text-xs transition-colors duration-150"
              >
                <FiMail size={15} className="text-[#ff6b00]" />
                <span>{t("hero.cta_contact")}</span>
              </motion.a>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-7 mt-7 border-t border-[#ff6b00]/20 max-w-2xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-3 rounded-md bg-[#161616] border border-[#ff6b00]/25 hover:border-[#ff6b00] transition-colors duration-150">
                <div className="flex items-center gap-2 text-[#fffff4] font-mono font-semibold text-xs mb-1">
                  <FiCode size={14} className="text-[#ff6b00]" />
                  <span>Full Stack</span>
                </div>
                <span className="text-xs font-mono text-[#fffff4]/70">Web & Mobile</span>
              </div>

              <div className="p-3 rounded-md bg-[#161616] border border-[#ff6b00]/25 hover:border-[#ff6b00] transition-colors duration-150">
                <div className="flex items-center gap-2 text-[#fffff4] font-mono font-semibold text-xs mb-1">
                  <FiLayers size={14} className="text-[#ff6b00]" />
                  <span>REST APIs</span>
                </div>
                <span className="text-xs font-mono text-[#fffff4]/70">Node.js & Go</span>
              </div>

              <div className="p-3 rounded-md bg-[#161616] border border-[#ff6b00]/25 hover:border-[#ff6b00] transition-colors duration-150">
                <div className="flex items-center gap-2 text-[#fffff4] font-mono font-semibold text-xs mb-1">
                  <FiCpu size={14} className="text-[#ff6b00]" />
                  <span>Arquitetura</span>
                </div>
                <span className="text-xs font-mono text-[#fffff4]/70">Clean Code</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:block lg:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <ProfileCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
