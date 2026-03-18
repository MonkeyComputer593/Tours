import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Tour } from '../types';
import ContactModal from './ContactModal';
import { useTranslation } from 'react-i18next';
import { translateTour } from '../i18n/tourTranslations';
import { urlFor } from '../lib/sanity';

interface TourDetailModalProps {
  tour: Tour | null;
  onClose: () => void;
}

export default function TourDetailModal({ tour, onClose }: TourDetailModalProps) {
  const { t, i18n } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  if (!tour) return null;
  
  const translatedTour = translateTour(tour, i18n.language);
  // Generate URL directly - always fresh
  const image: any = tour.image;
  const imageSrc = image?.asset?._ref 
    ? urlFor(image).width(1200).height(1500).fit('crop').auto('format').url()
    : (typeof image === 'string' ? image : '/assets/home.jpeg');

  return (
    <>
      <AnimatePresence>
        {tour && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              className="relative bg-white shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row rounded-2xl md:rounded-none"
            >
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden bg-gray-100">
                <img 
                  src={imageSrc}
                  alt={translatedTour.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/home.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-12 md:right-12 text-white">
                  <span className="text-[#F27D26] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
                    {tour.region}
                  </span>
                  <h3 className="text-2xl md:text-4xl lg:text-6xl font-black leading-none tracking-tighter uppercase">{translatedTour.title}</h3>
                </div>
              </div>

              <div className="md:w-1/2 overflow-y-auto p-6 md:p-12 lg:p-20 bg-white custom-scrollbar relative max-h-[50vh] md:max-h-none">
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 md:top-10 md:right-10 p-2 hover:bg-gray-50 rounded-full transition-colors z-10"
                >
                  <X className="w-5 md:w-6 h-5 md:h-6 text-gray-300" />
                </button>

                <div className="space-y-12 md:space-y-20">
                  {/* Header Info */}
                  <div className="grid grid-cols-2 gap-4 md:gap-12">
                    <div>
                      <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-gray-400 mb-2">{t('common.duration')}</p>
                      <p className="text-sm font-black text-gray-900 uppercase tracking-tight">{tour.duration}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-gray-400 mb-2">{t('common.region')}</p>
                      <p className="text-sm font-black text-gray-900 uppercase tracking-tight">{tour.region}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F27D26] mb-4 md:mb-8">{t('tourDetail.experience')}</h4>
                    <p className="text-xs md:text-sm text-gray-500 font-medium leading-relaxed uppercase tracking-wide">{translatedTour.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-12 border-t border-gray-100">
                    <div>
                      <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-gray-400 mb-2 md:mb-4">{t('common.nacional')}</p>
                      <p className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter">{tour.priceNacional}</p>
                      <p className="text-[9px] text-gray-400 mt-1 md:mt-2 uppercase tracking-widest font-bold">{t('common.perPerson')}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#F27D26] mb-2 md:mb-4">{t('common.internacional')}</p>
                      <p className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter">{tour.priceInternacional}</p>
                      <p className="text-[9px] text-gray-400 mt-1 md:mt-2 uppercase tracking-widest font-bold">{t('common.perPerson')}</p>
                    </div>
                  </div>

                  {/* Itinerary */}
                  {translatedTour.itinerary && translatedTour.itinerary.length > 0 && (
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F27D26] mb-6 md:mb-10">{t('common.itinerary')}</h4>
                      <div className="space-y-4 md:space-y-8">
                        {translatedTour.itinerary.map((item, idx) => (
                          <div key={idx} className="flex gap-4 md:gap-8 group">
                            <span className="text-gray-200 font-black text-xl md:text-2xl tracking-tighter group-hover:text-[#F27D26] transition-colors">0{idx + 1}</span>
                            <p className="text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed pt-1">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-8 md:pt-20 border-t border-gray-100">
                    <button 
                      onClick={() => setIsContactModalOpen(true)}
                      className="w-full bg-gray-900 text-white py-6 font-black text-[11px] uppercase tracking-[0.4em] hover:bg-[#F27D26] transition-all duration-500"
                    >
                      {t('tourDetail.bookThisTour')}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
