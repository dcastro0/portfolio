import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white/80 dark:bg-[#070b12] py-10 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()}{" "}
            <span className="gradient-text font-bold">Caio de Castro</span>. {t("footer.rights")}
          </p>
          <span className="text-xs text-slate-400 font-mono">{t("footer.built_with")}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/dcastro0"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200/50 dark:border-slate-700/50"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/caio-de-castro-a74a81188/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200/50 dark:border-slate-700/50"
          >
            <FiLinkedin size={18} />
          </a>

          <button
            onClick={scrollToTop}
            title="Voltar ao Topo"
            className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 ml-2"
          >
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
