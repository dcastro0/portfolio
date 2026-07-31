import { motion, AnimatePresence } from "motion/react";
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiGithub,
  FiLinkedin,
  FiClock,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useContactForm } from "../hooks/useContactForm";

const Contact = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, isSending, submitStatus, errors } = useContactForm();

  return (
    <section
      id="contact"
      className="py-24 flex items-center justify-center relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/30"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono mb-2 block">
            {t("contact.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
            {t("contact.description")}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3">{t("contact.form_title")}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {t("contact.form_subtitle")}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl glass-panel border border-slate-200/80 dark:border-slate-800/80">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                  <FiMail size={22} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">
                    E-mail Profissional
                  </span>
                  <a
                    href="mailto:caio.dcastrodev@gmail.com"
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 transition-colors"
                  >
                    caio.dcastrodev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl glass-panel border border-slate-200/80 dark:border-slate-800/80">
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <FiClock size={22} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Tempo de Resposta</span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Geralmente em até 24h
                  </span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono mb-4 block">
                Redes & Perfil Técnico
              </span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/dcastro0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl glass-panel border border-slate-200/80 dark:border-slate-800/80 text-slate-700 dark:text-slate-200 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:-translate-y-0.5 text-sm font-semibold"
                >
                  <FiGithub size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/caio-de-castro-a74a81188/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl glass-panel border border-slate-200/80 dark:border-slate-800/80 text-slate-700 dark:text-slate-200 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:-translate-y-0.5 text-sm font-semibold"
                >
                  <FiLinkedin size={20} className="text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 font-mono"
                >
                  {t("contact.form_name")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <FiUser size={18} />
                  </div>
                  <input
                    type="text"
                    id="user_name"
                    {...register("user_name")}
                    className={`w-full pl-10 pr-4 py-3 bg-white/80 dark:bg-slate-800/80 border ${
                      errors.user_name
                        ? "border-rose-500"
                        : "border-slate-200 dark:border-slate-700"
                    } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-slate-100 text-sm`}
                    placeholder={t("contact.form_name_placeholder")}
                  />
                </div>
                {errors.user_name && (
                  <span className="text-xs text-rose-500 font-medium mt-1.5 block">
                    {t(errors.user_name.message as string)}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 font-mono"
                >
                  {t("contact.form_email")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <FiMail size={18} />
                  </div>
                  <input
                    type="email"
                    id="user_email"
                    {...register("user_email")}
                    className={`w-full pl-10 pr-4 py-3 bg-white/80 dark:bg-slate-800/80 border ${
                      errors.user_email
                        ? "border-rose-500"
                        : "border-slate-200 dark:border-slate-700"
                    } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-slate-100 text-sm`}
                    placeholder={t("contact.form_email_placeholder")}
                  />
                </div>
                {errors.user_email && (
                  <span className="text-xs text-rose-500 font-medium mt-1.5 block">
                    {t(errors.user_email.message as string)}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 font-mono"
                >
                  {t("contact.form_message")}
                </label>
                <div className="relative">
                  <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                    <FiMessageSquare size={18} />
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    className={`w-full pl-10 pr-4 py-3 bg-white/80 dark:bg-slate-800/80 border ${
                      errors.message ? "border-rose-500" : "border-slate-200 dark:border-slate-700"
                    } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none text-slate-900 dark:text-slate-100 text-sm`}
                    placeholder={t("contact.form_message_placeholder")}
                  />
                </div>
                {errors.message && (
                  <span className="text-xs text-rose-500 font-medium mt-1.5 block">
                    {t(errors.message.message as string)}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white transition-all text-sm shadow-lg ${
                  isSending
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0"
                }`}
              >
                {isSending ? (
                  <span>{t("contact.form_sending_btn")}</span>
                ) : (
                  <>
                    <FiSend size={16} />
                    <span>{t("contact.form_send_btn")}</span>
                  </>
                )}
              </button>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 p-4 rounded-xl text-xs font-medium"
                  >
                    <FiCheckCircle size={18} className="shrink-0 text-emerald-500" />
                    <span>{t("contact.form_success")}</span>
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 p-4 rounded-xl text-xs font-medium"
                  >
                    <FiAlertCircle size={18} className="shrink-0 text-rose-500" />
                    <span>{t("contact.form_error")}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
