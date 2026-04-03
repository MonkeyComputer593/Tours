import React, { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const WHATSAPP = "+593 96 846 4331";
const EMAIL = "etsaatoursec@gmail.com";
const ADDRESS = "Macas, Ecuador";
const MAPS_LINK = "https://maps.google.com/?q=Macas+Ecuador";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tour: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const isEnglish = i18n.language === "en";

  const tourOptions = isEnglish
    ? [
        { value: "", label: "Select a tour" },
        { value: "Exclusive Achuar", label: "Exclusive Achuar Luxury" },
        { value: "Achuar Kapawi", label: "Achuar Luxury Immersion" },
        { value: "Achuar Signature", label: "Achuar Signature Experience" },
        { value: "Birding", label: "Birding Tour" },
        { value: "Cueva Tayos", label: "Cueva de los Tayos" },
        { value: "Rafting", label: "Luxury Rafting" },
        { value: "Andes", label: "Luxury Andes Experience" },
        { value: "Costa", label: "Luxury Pacific Experience" },
        { value: "Galapagos", label: "Signature Galápagos" },
        { value: "Ecuador Grand", label: "Ecuador Grand Luxury" },
        { value: "Otro", label: "Other / Contact us" },
      ]
    : [
        { value: "", label: "Selecciona un tour" },
        { value: "Exclusive Achuar", label: "Exclusive Achuar Luxury" },
        { value: "Achuar Kapawi", label: "Achuar Luxury Immersion" },
        { value: "Achuar Signature", label: "Achuar Signature Experience" },
        { value: "Birding", label: "Birding Tour" },
        { value: "Cueva Tayos", label: "Cueva de los Tayos" },
        { value: "Rafting", label: "Luxury Rafting" },
        { value: "Andes", label: "Luxury Andes Experience" },
        { value: "Costa", label: "Luxury Pacific Experience" },
        { value: "Galapagos", label: "Signature Galápagos" },
        { value: "Ecuador Grand", label: "Ecuador Grand Luxury" },
        { value: "Otro", label: "Otro / Consultar" },
      ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Create WhatsApp message
      const message = isEnglish
        ? `New Inquiry - ETSAATOURS\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nTour: ${formData.tour}\nMessage: ${formData.message}`
        : `Nueva Consulta - ETSAATOURS\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTelefono: ${formData.phone}\nTour de interes: ${formData.tour}\nMensaje: ${formData.message}`;

      const whatsappUrl = `https://wa.me/593968464331?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      setIsSent(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Error al abrir WhatsApp");
    }

    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: "", email: "", phone: "", tour: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-20"
        >
          <span className="text-[#F27D26] text-[10px] font-bold uppercase tracking-[0.4em] block">
            {t("contact.title")}
          </span>
          <h2 className="text-3xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-none uppercase mt-3 lg:mt-4">
            {isEnglish ? "We Are" : "Estamos"}{" "}
            <span className="text-gray-300">{isEnglish ? "Here" : "Aquí"}</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            {isEnglish
              ? "Ready for your next adventure? Write to us and we will plan your dream trip together."
              : "¿Listo para tu próxima aventura? Escríbenos y planificaremos juntos tu viaje soñado."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[250px] md:h-[300px] lg:h-[500px] rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127673.8348365457!2d-78.6238544!3d-2.3077336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91e670d4b770e85d%3A0x7b1e3d23c37c4d4!2sMacas%2C%20Ecuador!5e0!3m2!1ses!2sus!4v1700000000000!5m2!1ses!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>

          {/* Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors"
              >
                <MapPin className="w-6 h-6 text-[#F27D26] mb-2" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600 text-center">
                  {ADDRESS}
                </span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors"
              >
                <Phone className="w-6 h-6 text-[#F27D26] mb-2" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600 text-center">
                  {t("common.whatsapp")}
                </span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors"
              >
                <Mail className="w-6 h-6 text-[#F27D26] mb-2" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600 text-center">
                  {t("common.email")}
                </span>
              </a>
            </div>

            {/* Form */}
            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 rounded-2xl p-8 text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-black text-gray-900 mb-2">
                  {isEnglish ? "Message Sent!" : "¡Mensaje Enviado!"}
                </h3>
                <p className="text-gray-500">
                  {isEnglish
                    ? "We will contact you soon via WhatsApp."
                    : "Te contactaremos pronto por WhatsApp."}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">
                      {isEnglish ? "Name" : "Nombre"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20"
                      placeholder={isEnglish ? "Your name" : "Tu nombre"}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">
                      {isEnglish ? "Phone" : "Teléfono"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20"
                      placeholder="+593 96 846 4331"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">
                    {isEnglish ? "Tour of Interest" : "Tour de Interés"}
                  </label>
                  <select
                    value={formData.tour}
                    onChange={(e) =>
                      setFormData({ ...formData, tour: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20"
                  >
                    {tourOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">
                    {t("contact.message")}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20 resize-none"
                    placeholder={
                      isEnglish
                        ? "How can we help you?"
                        : "¿En qué podemos ayudarte?"
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F27D26] text-white py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 hover:bg-orange-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  {isEnglish ? "Send via WhatsApp" : "Enviar por WhatsApp"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
