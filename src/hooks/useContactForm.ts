import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";

export const contactSchema = z.object({
  user_name: z.string().min(1, { message: "contact.errors.name_required" }),
  user_email: z
    .string()
    .min(1, { message: "contact.errors.email_required" })
    .email({ message: "contact.errors.email_invalid" }),
  message: z.string().min(10, { message: "contact.errors.message_min" }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type SubmitStatus = "idle" | "success" | "error";

export const useContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSending(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_default",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_default",
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "public_key"
      );
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSending(false);
      setTimeout(() => setSubmitStatus("idle"), 6000);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    isSending,
    submitStatus,
    errors,
  };
};
