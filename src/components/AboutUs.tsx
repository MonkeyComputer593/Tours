import React from "react";
import { motion } from "motion/react";
import { Map } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white scroll-mt-20" id="about">
      {/* Hero Section - Logo como banner */}
      <section className="relative h-[50vh] lg:h-[70vh] w-full overflow-hidden bg-black">
        <img
          src="/assets/logo-etsaa.png"
          alt="ETSAATOURS"
          className="w-full h-auto"
        />
      </section>

      {/* Vision & Mission */}
      <section className="py-12 lg:py-40 max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-10"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26]">
              01. {t('about.vision')}
            </span>
            <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tighter text-gray-900 leading-none">
              {t('about.visionTitle')}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed font-medium uppercase tracking-widest">
              {t('about.visionText')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 lg:space-y-10"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26]">
              02. {t('about.mission')}
            </span>
            <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tighter text-gray-900 leading-none">
              {t('about.missionTitle')}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed font-medium uppercase tracking-widest">
              {t('about.missionText')}
            </p>
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
            {t('common.exploreTours')}
          </a>
        </div>
      </section>

      {/* Raíces Profundas */}
      <section className="py-12 lg:py-40 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-center">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-gray-200 order-2 lg:order-1">
              <img
                src="/assets/cultural-achuar.jpeg"
                alt={t('about.roots')}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="space-y-6 lg:space-y-16 order-1 lg:order-2">
              <div className="space-y-4 lg:space-y-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F27D26]">
                  More than an agency
                </span>
                <h2 className="text-3xl lg:text-8xl font-black text-gray-900 leading-none tracking-tighter uppercase">
                  {t('about.roots')}
                </h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-medium uppercase tracking-widest">
                {t('about.rootsText')}
              </p>
              <div className="grid grid-cols-2 gap-6 lg:gap-12 pt-6 lg:pt-16 border-t border-gray-200">
                <div>
                  <span className="text-4xl lg:text-7xl font-black text-gray-900 tracking-tighter">
                    15+
                  </span>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mt-3 lg:mt-6">
                    {t('about.yearsExperience')}
                  </p>
                </div>
                <div>
                  <span className="text-4xl lg:text-7xl font-black text-gray-900 tracking-tighter">
                    40+
                  </span>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mt-3 lg:mt-6">
                    {t('about.alliedCommunities')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
