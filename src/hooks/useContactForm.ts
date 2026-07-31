import { useState, useRef, type FormEvent } from "react";
import emailjs from '@emailjs/browser';

export type SubmitStatus = 'idle' | 'success' | 'error';

export const useContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

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
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default',
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setSubmitStatus('error');
    } finally {
      setIsSending(false);
      setTimeout(() => setSubmitStatus('idle'), 6000);
    }
  };

  return {
    formRef,
    isSending,
    submitStatus,
    handleSubmit,
  };
};
