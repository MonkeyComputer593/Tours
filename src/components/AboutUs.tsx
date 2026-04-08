import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Map, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getNosotros, urlFor } from "../lib/sanity";

interface NosotrosData {
  _id: string;
  logo: any;
  visionTitulo: string;
  visionTituloEn: string;
  vision: string;
  visionEn: string;
  visionImagen: any;
  misionTitulo: string;
  misionTituloEn: string;
  mision: string;
  misionEn: string;
  misionImagen: any;
  raicesTitulo: string;
  raicesTituloEn: string;
  raicesSubtitulo: string;
  raicesSubtituloEn: string;
  raicesTexto: string;
  raicesTextoEn: string;
  raicesImagen: any;
  anosExperiencia: number;
  comunidades: number;
}

export default function AboutUs() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const [nosotros, setNosotros] = useState<NosotrosData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNosotros()
      .then((data) => {
        setNosotros(data);
      })
      .catch((err) => {
        console.error("Error fetching nosotros:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getTexto = (es: string | undefined, en: string | undefined) => {
    return isEnglish && en ? en : es;
  };

  const getImagenUrl = (imagen: any, fallback: string = "/assets/cultural-achuar.jpeg") => {
    // If no image asset, return fallback or null
    if (!imagen?.asset?._ref) return fallback;
    // Use urlFor to build the image URL from Sanity
    try {
      const url = urlFor(imagen).url();
      if (url) return url;
    } catch (e) {
      console.error("Error building image URL:", e);
    }
    return fallback;
  };

  const getLogoUrl = (logo: any) => {
    if (!logo?.asset?._ref) return "/assets/logo.png";
    try {
      const url = urlFor(logo).url();
      if (url) return url;
    } catch (e) {
      console.error("Error building logo URL:", e);
    }
    return "/assets/logo.png";
  };

  if (loading) {
    return (
      <div className="bg-white scroll-mt-20" id="about">
        <div className="flex items-center justify-center py-40">
          <Loader2 className="w-8 h-8 text-[#F27D26] animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white scroll-mt-20" id="about">
      {/* Hero Section - Logo como banner */}
      <section className="relative w-full bg-black pt-8 lg:pt-12">
        {nosotros?.logo?.asset?._ref ? (
          <img
            src={getLogoUrl(nosotros.logo)}
            alt="ETSAATOURS"
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        ) : (
          <div className="w-full h-32 lg:h-48 flex items-center justify-center">
            <p className="text-gray-500 text-sm">Subir logo en Sanity</p>
          </div>
        )}
      </section>

      {/* Vision & Mission */}
      <section className="py-12 lg:py-20 max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden aspect-[3/4] lg:aspect-[16/9] bg-black rounded-xl"
          >
            {nosotros?.visionImagen?.asset?._ref ? (
              <img
                src={getImagenUrl(nosotros.visionImagen)}
                alt={getTexto(nosotros?.visionTitulo, nosotros?.visionTituloEn) || "Visión"}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-end">
              <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter mb-2">
                {getTexto(nosotros?.visionTitulo, nosotros?.visionTituloEn) || "Visión"}
              </h3>
              <p className="text-xs lg:text-sm text-gray-300 line-clamp-2 lg:line-clamp-3">
                {getTexto(nosotros?.vision, nosotros?.visionEn) || "editar en sanity"}
              </p>
            </div>
          </motion.div>

          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden aspect-[3/4] lg:aspect-[16/9] bg-black rounded-xl"
          >
            {nosotros?.misionImagen?.asset?._ref ? (
              <img
                src={getImagenUrl(nosotros.misionImagen)}
                alt={getTexto(nosotros?.misionTitulo, nosotros?.misionTituloEn) || "Misión"}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-end">
              <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter mb-2">
                {getTexto(nosotros?.misionTitulo, nosotros?.misionTituloEn) || "Misión"}
              </h3>
              <p className="text-xs lg:text-sm text-gray-300 line-clamp-2 lg:line-clamp-3">
                {getTexto(nosotros?.mision, nosotros?.misionEn) || "editar en sanity"}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Botón Explorar Tours */}
      <section className="py-8 lg:py-12 bg-[#F9F9F7]">
        <div className="text-center">
          <a
            href="#tours"
            className="inline-flex items-center gap-3 bg-[#F27D26] text-white px-8 lg:px-10 py-3.5 lg:py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition-colors"
          >
            <Map className="w-5 h-5" />
            {t("common.exploreTours")}
          </a>
        </div>
      </section>

      {/* Raíces Profundas */}
      <section className="py-12 lg:py-40 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-center">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-gray-200 order-2 lg:order-1">
              <img
                src={getImagenUrl(nosotros?.raicesImagen)}
                alt={getTexto(nosotros?.raicesTitulo, nosotros?.raicesTituloEn) || t("about.roots")}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="space-y-6 lg:space-y-16 order-1 lg:order-2">
              <div className="space-y-4 lg:space-y-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26]">
                  {getTexto(nosotros?.raicesSubtitulo, nosotros?.raicesSubtituloEn) || "More than an agency"}
                </span>
                <h2 className="text-3xl lg:text-8xl font-black text-gray-900 leading-none tracking-tighter uppercase">
                  {getTexto(nosotros?.raicesTitulo, nosotros?.raicesTituloEn) || "editar en sanity"}
                </h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-medium uppercase tracking-widest">
                {getTexto(nosotros?.raicesTexto, nosotros?.raicesTextoEn) || "editar en sanity"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
