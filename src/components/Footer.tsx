import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 py-8 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-blue-600 dark:text-blue-500 font-semibold">Caio de Castro</span>. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/dcastro0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <FiGithub size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/caio-de-castro-a74a81188/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
        
        </div>

      </div>
    </footer>
  );
};

export default Footer;