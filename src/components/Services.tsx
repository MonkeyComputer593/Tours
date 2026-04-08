import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Map } from "lucide-react";

export default function Services() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-[#F9F9F7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F27D26] text-[10px] font-bold uppercase tracking-[0.4em]"
          >
            Nuestra Esencia
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-none uppercase mt-2"
          >
            MISIÓN Y <span className="text-gray-300">VISIÓN</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden aspect-[3/4] lg:aspect-[16/9] bg-black"
          >
            <img
              src="/assets/banner-andes.png"
              alt="Visión"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-end">
              <span className="text-[#F27D26] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
                01. Visión
              </span>
              <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter mb-2">
                El Futuro
              </h3>
              <p className="text-xs lg:text-sm text-gray-300 line-clamp-2 lg:line-clamp-3"></p>
            </div>
          </motion.div>

          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden aspect-[3/4] lg:aspect-[16/9] bg-black"
          >
            <img
              src="/assets/galapagos-signature.jpeg"
              alt="Misión"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-end">
              <span className="text-[#F27D26] text-[10px] font-bold uppercase tracking-[0.3em] mb-2"></span>
              <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter mb-2">
                Nuestro Compromiso
              </h3>
              <p className="text-xs lg:text-sm text-gray-300 line-clamp-2 lg:line-clamp-3"></p>
            </div>
          </motion.div>
        </div>

        {/* Botón */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 lg:mt-16 text-center"
        >
          <a
            href="#tours"
            className="inline-flex items-center gap-3 bg-[#F27D26] text-white px-8 lg:px-10 py-3.5 lg:py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition-colors"
          >
            <Map className="w-5 h-5" />
            Explorar Tours
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
