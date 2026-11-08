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
import { motion, AnimatePresence } from "motion/react";
import { useContactForm } from "../hooks/useContactForm";

const Contact = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, isSending, submitStatus, errors } = useContactForm();

  return (
    <section id="contact" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-5 mb-8 border-b border-[#ff6b00]/25 gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff6b00] block mb-1">
              05 // {t("contact.badge")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#fffff4]">
              {t("contact.title")}
            </h2>
          </div>
          <p className="text-xs font-mono text-[#fffff4]/70 max-w-md">{t("contact.description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            className="lg:col-span-5 space-y-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-lg font-bold text-[#fffff4] mb-1.5">{t("contact.form_title")}</h3>
              <p className="text-[#fffff4]/80 leading-relaxed text-sm">
                {t("contact.form_subtitle")}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3.5 p-3.5 rounded-md tech-panel-interactive">
                <div className="p-2.5 rounded-md bg-[#0f0f0f] border border-[#ff6b00]/40 text-[#ff6b00] shrink-0">
                  <FiMail size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#ff6b00] uppercase block">
                    {t("contact.email_label")}
                  </span>
                  <a
                    href="mailto:caio.dcastrodev@gmail.com"
                    className="text-xs sm:text-sm font-mono font-semibold text-[#fffff4] hover:text-[#ff6b00] transition-colors duration-150"
                  >
                    caio.dcastrodev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-md tech-panel">
                <div className="p-2.5 rounded-md bg-[#0f0f0f] border border-[#ff6b00]/40 text-[#ff6b00] shrink-0">
                  <FiClock size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#ff6b00] uppercase block">
                    {t("contact.response_label")}
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-semibold text-[#fffff4]">
                    {t("contact.response_value")}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono text-[#ff6b00] uppercase tracking-widest mb-3 block">
                {t("contact.social_label")}
              </span>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="https://github.com/dcastro0"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#161616] hover:bg-[#1f1f1f] border border-[#ff6b00]/30 hover:border-[#ff6b00] text-[#fffff4] hover:text-[#ff6b00] transition-colors duration-150 text-xs font-mono"
                >
                  <FiGithub size={16} className="text-[#ff6b00]" />
                  <span>github.com/dcastro0</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/caio-de-castro-a74a81188/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#161616] hover:bg-[#1f1f1f] border border-[#ff6b00]/30 hover:border-[#ff6b00] text-[#fffff4] hover:text-[#ff6b00] transition-colors duration-150 text-xs font-mono"
                >
                  <FiLinkedin size={16} className="text-[#ff6b00]" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 tech-panel p-5 sm:p-6 rounded-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-xs font-mono uppercase tracking-wider text-[#fffff4]/80 mb-1.5"
                >
                  {t("contact.form_name")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#ff6b00]">
                    <FiUser size={15} />
                  </div>
                  <input
                    type="text"
                    id="user_name"
                    {...register("user_name")}
                    aria-invalid={Boolean(errors.user_name)}
                    aria-describedby={errors.user_name ? "user_name_error" : undefined}
                    className={`w-full pl-9 pr-3.5 py-2.5 bg-[#0f0f0f] border ${
                      errors.user_name ? "border-rose-400" : "border-[#ff6b00]/25"
                    } rounded-md focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] transition-colors duration-150 outline-none text-[#fffff4] placeholder-[#fffff4]/30 text-sm font-mono`}
                    placeholder={t("contact.form_name_placeholder")}
                  />
                </div>
                {errors.user_name && (
                  <span
                    id="user_name_error"
                    role="alert"
                    className="text-xs font-mono text-rose-400 mt-1 block"
                  >
                    {t(errors.user_name.message as string)}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="block text-xs font-mono uppercase tracking-wider text-[#fffff4]/80 mb-1.5"
                >
                  {t("contact.form_email")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#ff6b00]">
                    <FiMail size={15} />
                  </div>
                  <input
                    type="email"
                    id="user_email"
                    {...register("user_email")}
                    aria-invalid={Boolean(errors.user_email)}
                    aria-describedby={errors.user_email ? "user_email_error" : undefined}
                    className={`w-full pl-9 pr-3.5 py-2.5 bg-[#0f0f0f] border ${
                      errors.user_email ? "border-rose-400" : "border-[#ff6b00]/25"
                    } rounded-md focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] transition-colors duration-150 outline-none text-[#fffff4] placeholder-[#fffff4]/30 text-sm font-mono`}
                    placeholder={t("contact.form_email_placeholder")}
                  />
                </div>
                {errors.user_email && (
                  <span
                    id="user_email_error"
                    role="alert"
                    className="text-xs font-mono text-rose-400 mt-1 block"
                  >
                    {t(errors.user_email.message as string)}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-[#fffff4]/80 mb-1.5"
                >
                  {t("contact.form_message")}
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none text-[#ff6b00]">
                    <FiMessageSquare size={15} />
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message_error" : undefined}
                    className={`w-full pl-9 pr-3.5 py-2.5 bg-[#0f0f0f] border ${
                      errors.message ? "border-rose-400" : "border-[#ff6b00]/25"
                    } rounded-md focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] transition-colors duration-150 outline-none resize-none text-[#fffff4] placeholder-[#fffff4]/30 text-sm font-mono`}
                    placeholder={t("contact.form_message_placeholder")}
                  />
                </div>
                {errors.message && (
                  <span
                    id="message_error"
                    role="alert"
                    className="text-xs font-mono text-rose-400 mt-1 block"
                  >
                    {t(errors.message.message as string)}
                  </span>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: isSending ? 1 : 1.01 }}
                whileTap={{ scale: isSending ? 1 : 0.99 }}
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-md font-mono font-bold text-xs transition-colors duration-150 border cursor-pointer ${
                  isSending
                    ? "bg-[#1f1f1f] text-[#fffff4]/50 border-[#ff6b00]/20 cursor-not-allowed"
                    : "bg-[#ff6b00] hover:bg-[#ff6b00]/90 text-[#0f0f0f] border-[#ff6b00] shadow-[0_0_15px_rgba(255,107,0,0.25)]"
                }`}
              >
                {isSending ? (
                  <span>{t("contact.form_sending_btn")}</span>
                ) : (
                  <>
                    <FiSend size={14} />
                    <span>{t("contact.form_send_btn")}</span>
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    role="status"
                    aria-live="polite"
                    className="flex items-center gap-2.5 text-[#fffff4] bg-[#0f0f0f] border border-[#ff6b00] p-3 rounded-md text-xs font-mono"
                  >
                    <FiCheckCircle size={16} className="shrink-0 text-[#ff6b00]" />
                    <span>{t("contact.form_success")}</span>
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    role="alert"
                    aria-live="assertive"
                    className="flex items-center gap-2.5 text-[#fffff4] bg-[#0f0f0f] border border-rose-400 p-3 rounded-md text-xs font-mono"
                  >
                    <FiAlertCircle size={16} className="shrink-0 text-rose-400" />
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
