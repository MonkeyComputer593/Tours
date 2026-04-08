import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Phone, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const WHATSAPP = "+593 96 846 4331";

export default function WhatsAppFloat() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = isEnglish
      ? `*New Inquiry - ETSAATOURS*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`
      : `*Nueva Consulta - ETSAATOURS*\n\n*Nombre:* ${formData.name}\n*Email:* ${formData.email}\n*Mensaje:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setIsSent(true);

    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: "", email: "", message: "" });
      setIsOpen(false);
    }, 2000);
  };

  return (
    <>
      {/* Botón flotante siempre visible */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors"
        style={{ padding: "14px" }}
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.button>

      {/* Modal del formulario */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[32px] shadow-2xl w-full max-w-lg overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6 md:mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                      {t("contact.title")}
                    </h3>
                    <p className="text-gray-500 font-medium text-sm">
                      {t("contact.subtitle")}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 md:w-6 h-5 md:h-6 text-gray-400" />
                  </button>
                </div>

                {isSent ? (
                  <div className="text-center py-8 md:py-12">
                    <div className="w-16 md:w-20 h-16 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <CheckCircle className="w-8 md:w-10 h-8 md:h-10 text-green-500" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-2">
                      {isEnglish ? "Message Sent!" : "¡Mensaje Enviado!"}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {isEnglish
                        ? "We will contact you soon via WhatsApp"
                        : "Te contactaremos pronto por WhatsApp"}
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 md:space-y-6"
                  >
                    <div>
                      <label className="block text-[10px] uppercase font-black tracking-widest text-gray-400 mb-2">
                        {t("contact.name")}
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20"
                        placeholder={t("contact.namePlaceholder")}
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-black tracking-widest text-gray-400 mb-2">
                        {t("contact.email")}
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20"
                        placeholder={t("contact.emailPlaceholder")}
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-black tracking-widest text-gray-400 mb-2">
                        {t("contact.message")}
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20 resize-none"
                        placeholder={t("contact.messagePlaceholder")}
                      />
                    </div>

                    <div className="pt-2 md:pt-4">
                      <button
                        type="submit"
                        className="w-full bg-[#25D366] text-white py-3 md:py-4 rounded-xl font-black text-base md:text-lg flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-all"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="white"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        {isEnglish
                          ? "Send via WhatsApp"
                          : "Enviar por WhatsApp"}
                      </button>
                    </div>
                  </form>
                )}

                <div className="mt-6 md:pt-6 border-t border-gray-100 flex items-center justify-center gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <Phone className="w-5 md:w-6 h-5 md:h-6 text-[#25D366]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">
                      {t("contact.callUs")}
                    </p>
                    <p className="text-base md:text-lg font-black text-gray-900">
                      {WHATSAPP}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
