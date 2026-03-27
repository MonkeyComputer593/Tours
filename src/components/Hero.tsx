import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black -mt-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/assets/video-home.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#F27D26] mb-4"
        >
          {t('hero.subtitle')}
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1] uppercase"
        >
          {t('hero.title')} <br className="hidden sm:block" />
          <span className="text-white/90">{t('hero.title2')}</span>
        </motion.h1>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[8px] uppercase tracking-[0.3em] text-white/50 font-bold">{t('hero.explore')}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-[#F27D26]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
