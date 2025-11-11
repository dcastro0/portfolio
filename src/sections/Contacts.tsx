import { useState, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiMail, FiUser, FiMessageSquare, FiSend, FiCheckCircle, FiAlertCircle, FiGithub, FiLinkedin } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setSubmitStatus('idle');

    const formData = new FormData(formRef.current);
    const data = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      message: formData.get('message'),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setSubmitStatus('error');
    } finally {
      setIsSending(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 flex items-center justify-center bg-gray-50 dark:bg-gray-950/50 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('contact.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">{t('contact.form_title')}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {t('contact.form_subtitle')}
            </p>
            
            <div className="flex gap-6">
              <a href="https://github.com/dcastro0" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                <FiGithub size={28} />
              </a>
              <a href="https://linkedin.com/in/caio-de-castro-a74a81188/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0A66C2] transition-colors">
                <FiLinkedin size={28} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form_name')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FiUser />
                  </div>
                  <input 
                    type="text" 
                    name="user_name" 
                    id="user_name" 
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors outline-none"
                    placeholder={t('contact.form_name_placeholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form_email')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FiMail />
                  </div>
                  <input 
                    type="email" 
                    name="user_email" 
                    id="user_email" 
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors outline-none"
                    placeholder={t('contact.form_email_placeholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form_message')}
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none text-gray-400">
                    <FiMessageSquare />
                  </div>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors outline-none resize-none"
                    placeholder={t('contact.form_message_placeholder')}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSending}
                className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold text-white transition-all ${
                  isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 shadow-md hover:shadow-lg'
                }`}
              >
                {isSending ? (
                  <>{t('contact.form_sending_btn')}</>
                ) : (
                  <>
                    <FiSend /> {t('contact.form_send_btn')}
                  </>
                )}
              </button>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                    <FiCheckCircle className="shrink-0" />
                    <span>{t('contact.form_success')}</span>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                    <FiAlertCircle className="shrink-0" />
                    <span>{t('contact.form_error')}</span>
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