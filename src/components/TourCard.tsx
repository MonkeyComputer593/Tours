import React from 'react';
import { Tour } from '../types';
import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { translateTour } from '../i18n/tourTranslations';
import { urlFor } from '../lib/sanity';

interface TourCardProps {
  tour: Tour;
  onViewDetails: (tour: Tour) => void;
}

const TourCard: React.FC<TourCardProps> = ({ tour, onViewDetails }) => {
  const { i18n } = useTranslation();
  const translatedTour = translateTour(tour, i18n.language);
  
  // Generate URL directly - always fresh
  const image: any = tour.image;
  const imageSrc = image?.asset?._ref 
    ? urlFor(image).width(800).height(1000).fit('crop').auto('format').url()
    : (typeof image === 'string' ? image : '/assets/home.jpeg');

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer h-full flex flex-col"
      onClick={() => onViewDetails(tour)}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={imageSrc}
          alt={translatedTour.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/home.jpeg';
          }}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-black text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5">
            {tour.region}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      
      <div className="py-4 flex-1 flex flex-col min-h-0">
        <div className="flex items-start justify-between gap-2 mb-2 min-w-0">
          <h3 className="text-sm md:text-base font-black uppercase tracking-tight text-gray-900 group-hover:text-[#F27D26] transition-colors leading-tight truncate">
            {translatedTour.title}
          </h3>
          <div className="flex items-center gap-1 text-[9px] font-bold text-gray-400 uppercase tracking-widest shrink-0">
            <Clock className="w-3 h-3" />
            {tour.duration}
          </div>
        </div>
        
        <p className="text-xs text-gray-500 line-clamp-2 font-medium leading-relaxed mb-3 flex-1">
          {translatedTour.description}
        </p>

        <div className="flex items-center gap-4 pt-3 border-t border-gray-100 mt-auto">
          <div className="flex flex-col">
            <span className="text-[7px] uppercase font-bold text-gray-400 tracking-[0.2em]">{i18n.language === 'en' ? 'National' : 'Nacional'}</span>
            <span className="text-sm font-black text-gray-900">{tour.priceNacional}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[7px] uppercase font-bold text-[#F27D26] tracking-[0.2em]">{i18n.language === 'en' ? 'International' : 'Internacional'}</span>
            <span className="text-sm font-black text-gray-900">{tour.priceInternacional}</span>
          </div>
          <div className="ml-auto">
            <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#F27D26] group-hover:bg-[#F27D26] transition-all">
              <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;
