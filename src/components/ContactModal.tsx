import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Phone, CheckCircle, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTour?: string;
}

const WHATSAPP = "+593 96 846 4331";

export default function ContactModal({
  isOpen,
  onClose,
  preselectedTour,
}: ContactModalProps) {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  // Update message when tour or language changes
  useEffect(() => {
    if (preselectedTour) {
      const messageText = isEnglish
        ? `I'm interested in: ${preselectedTour}`
        : `Estoy interesado en: ${preselectedTour}`;
      setFormData((prev) => ({ ...prev, message: messageText }));
    }
  }, [preselectedTour, isEnglish]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build message with tour info if preselected
    const tourInfo = preselectedTour ? `\n*Tour:* ${preselectedTour}` : "";

    const message = isEnglish
      ? `*New Inquiry - ETSAATOURS*${tourInfo}\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`
      : `*Nueva Consulta - ETSAATOURS*${tourInfo}\n\n*Nombre:* ${formData.name}\n*Email:* ${formData.email}\n*Mensaje:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setIsSent(true);

    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: "", email: "", message: "" });
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="relative bg-white rounded-t-3xl sm:rounded-[32px] shadow-2xl w-full sm:max-w-lg overflow-hidden max-h-[90vh] sm:max-h-none"
          >
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[90vh] sm:max-h-none">
              <div className="flex justify-between items-start mb-6 sm:mb-8">
                <div className="flex-1 pr-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                    {t("contact.title")}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm sm:text-base">
                    {t("contact.subtitle")}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                </button>
              </div>

              {isSent ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-black text-gray-900 mb-2">
                    {isEnglish ? "Message Sent!" : "¡Mensaje Enviado!"}
                  </h4>
                  <p className="text-gray-500">
                    {isEnglish
                      ? "We will contact you soon via WhatsApp"
                      : "Te contactaremos pronto por WhatsApp"}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20 resize-none"
                      placeholder={t("contact.messagePlaceholder")}
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-[#F27D26] text-white py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 hover:bg-[#d66a1d] transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      {isEnglish ? "Send via WhatsApp" : "Enviar por WhatsApp"}
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#F27D26]" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">
                    {t("contact.callUs")}
                  </p>
                  <p className="text-lg font-black text-gray-900">
                    +593 96 846 4331
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
