import React, { useState, useEffect } from 'react';
import { getAllTours } from '../lib/sanity';
import TourCard from './TourCard';
import { motion } from 'motion/react';
import { Tour } from '../types';
import { useTranslation } from 'react-i18next';

const REGIONS = ['Todos', 'Amazonía', 'Andes', 'Costa', 'Galápagos'];

export default function TourGrid() {
  const { t } = useTranslation();
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Todos');

  useEffect(() => {
    getAllTours().then((data) => {
      const mapped = data.map((tour: any) => ({ ...tour, id: tour._id }));
      setTours(mapped);
      setLoading(false);
    });
  }, []);

  const getRegionLabel = (region: string) => {
    const labels: Record<string, string> = {
      'Todos': t('tours.all'),
      'Amazonía': t('tours.amazonia'),
      'Andes': t('tours.andes'),
      'Costa': t('tours.costa'),
      'Galápagos': t('tours.galapagos'),
    };
    return labels[region] || region;
  };

  const filteredTours = activeFilter === 'Todos'
    ? tours
    : tours.filter(tour => tour.region === activeFilter);

  return (
    <section id="tours" className="pt-4 pb-0 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 mb-10 lg:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[0.4em] block text-center text-[#F27D26]"
        >
          {t('tours.subtitle')}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-none uppercase text-center mt-2"
        >
          {t('tours.title')} <span className="text-gray-300">{t('tours.titleGray')}</span>
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-12 mb-8 lg:mb-10">
        <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
          {REGIONS.map((region) => (
            <button
              key={region}
              onClick={() => setActiveFilter(region)}
              className={`px-4 lg:px-6 py-2 lg:py-3 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${
                activeFilter === region
                  ? 'bg-[#F27D26] text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {getRegionLabel(region)}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        {loading ? (
          <div className="py-12 text-center">
            <p className="text-gray-400 font-medium text-sm">Cargando tours...</p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {filteredTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
              />
            ))}
          </motion.div>
        )}
        {!loading && filteredTours.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-500 font-medium">No se encontraron tours.</p>
          </div>
        )}
      </div>
    </section>
  );
}
