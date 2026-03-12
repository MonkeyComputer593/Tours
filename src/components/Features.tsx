import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Users, ShieldCheck, Tag } from 'lucide-react';

const VALUES = [
  {
    icon: Leaf,
    title: 'Eco-Consciente',
    description: 'Turismo responsable que preserva el equilibrio ecológico.',
  },
  {
    icon: Users,
    title: 'Impacto Social',
    description: 'Creamos puentes entre viajeros y comunidades locales.',
  },
  {
    icon: ShieldCheck,
    title: 'Guías Certificados',
    description: 'Expertos locales apasionados por su tierra y su historia.',
  },
  {
    icon: Tag,
    title: 'Precio Justo',
    description: 'Transparencia total y beneficio directo para el territorio.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white border-y border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {VALUES.map((value, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={value.title} 
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#F27D26] group-hover:text-white transition-all duration-300 shadow-sm">
                <value.icon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-black mb-3 text-gray-900">{value.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[240px] font-medium">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
