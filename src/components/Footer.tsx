import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f0f0f] py-6 border-t border-[#ff6b00]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <p className="text-[#fffff4] text-xs font-mono">
            © {new Date().getFullYear()} Caio de Castro <span className="text-[#ff6b00]">//</span>{" "}
            <span className="text-[#fffff4]/70">{t("footer.rights")}</span>
          </p>
          <span className="hidden sm:inline text-[#ff6b00]">|</span>
          <span className="text-[11px] text-[#fffff4]/70 font-mono">{t("footer.built_with")}</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/dcastro0"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="px-2.5 py-1.5 rounded-md bg-[#161616] text-[#fffff4]/80 hover:text-[#ff6b00] hover:border-[#ff6b00] transition-colors duration-150 border border-[#ff6b00]/25 flex items-center gap-1.5 text-xs font-mono"
          >
            <FiGithub size={14} className="text-[#ff6b00]" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/caio-de-castro-a74a81188/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="px-2.5 py-1.5 rounded-md bg-[#161616] text-[#fffff4]/80 hover:text-[#ff6b00] hover:border-[#ff6b00] transition-colors duration-150 border border-[#ff6b00]/25 flex items-center gap-1.5 text-xs font-mono"
          >
            <FiLinkedin size={14} className="text-[#ff6b00]" />
            <span>LinkedIn</span>
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            title="Voltar ao Topo"
            aria-label="Voltar ao Topo"
            className="p-2 rounded-md bg-[#161616] text-[#fffff4] border border-[#ff6b00]/40 hover:border-[#ff6b00] hover:bg-[#ff6b00] hover:text-[#0f0f0f] transition-all duration-150 ml-1 cursor-pointer"
          >
            <FiArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
