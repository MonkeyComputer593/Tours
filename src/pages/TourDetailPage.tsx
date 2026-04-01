import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, MapPin, ArrowRight } from 'lucide-react';
import { getTourBySlug, getAllTours, urlFor } from '../lib/sanity';
import { Tour } from '../types';
import ContactModal from '../components/ContactModal';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';
import { translateTour } from '../i18n/tourTranslations';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TourDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [tour, setTour] = useState<Tour | null>(null);
  const [otherTours, setOtherTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    if (slug) {
      Promise.all([
        getTourBySlug(slug),
        getAllTours()
      ])
        .then(([tourData, allToursData]) => {
          if (tourData) {
            setTour({ ...tourData, id: tourData._id });
            // Filter out current tour and get up to 3 other tours
            const other = allToursData
              .filter((t: any) => t._id !== tourData._id)
              .slice(0, 3)
              .map((t: any) => ({ ...t, id: t._id }));
            setOtherTours(other);
          }
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#F27D26] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-400 text-xs uppercase tracking-wider font-bold">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <h1 className="text-xl md:text-2xl font-black text-gray-900 uppercase mb-4 text-center">Tour no encontrado</h1>
        <button onClick={() => navigate('/')} className="text-[#F27D26] font-bold uppercase tracking-wider hover:underline text-sm">
          Volver al inicio
        </button>
      </div>
    );
  }

  const translatedTour = translateTour(tour, i18n.language);
  const image: any = tour.image;
  const imageSrc = image?.asset?._ref 
    ? urlFor(image).width(1600).height(1200).fit('crop').auto('format').url()
    : '/assets/home.jpeg';

  // Dynamic SEO for this tour
  const tourUrl = `https://www.etsaatours.com${location.pathname}`;
  const seoTitle = `${translatedTour.title} - ETSAATOURS | Tour en ${tour.region}`;
  const seoDescription = `${translatedTour.description?.substring(0, 150)}... Descubre esta experiencia única en ${tour.region}. Tour de ${tour.duration}.`;

  return (
    <>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        image={imageSrc}
        url={tourUrl}
        type="article"
      />
      <div className="min-h-screen bg-white">
        <Navbar />
      
      {/* Back Button & Tours List Link */}
      <div className="max-w-7xl mx-auto px-4 lg:px-12 pt-20 md:pt-28">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <button 
            onClick={() => navigate('/#tours')}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#F27D26] transition-colors font-bold uppercase text-[10px] tracking-[0.2em]"
          >
            <ArrowLeft className="w-4 h-4" />
            {i18n.language === 'en' ? 'Back to Tours' : 'Volver a Tours'}
          </button>
          <button 
            onClick={() => navigate('/#tours')}
            className="inline-flex items-center justify-center gap-2 bg-[#F27D26] text-white px-4 py-2 hover:bg-[#d66a1d] transition-colors font-bold text-[10px] tracking-[0.2em] rounded-lg"
          >
            {i18n.language === 'en' ? 'View All Tours' : 'Ver Todos los Tours'}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] mt-6 md:mt-10 overflow-hidden">
        <img 
          src={imageSrc}
          alt={translatedTour.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/home.jpeg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20">
          <div className="max-w-7xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#F27D26] text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] block mb-3 md:mb-4"
            >
              {tour.region}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-none"
            >
              {translatedTour.title}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12 md:space-y-20">
            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#F27D26]" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-gray-400">{t('common.duration')}</p>
                  <p className="text-sm md:text-base font-black text-gray-900 uppercase">{tour.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#F27D26]" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-gray-400">{t('common.region')}</p>
                  <p className="text-sm md:text-base font-black text-gray-900 uppercase">{tour.region}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F27D26] mb-4 md:mb-8">
                {i18n.language === 'en' ? 'Experience' : 'Experiencia'}
              </h2>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed uppercase tracking-wide">
                {translatedTour.description}
              </p>
            </div>

            {/* Itinerary */}
            {translatedTour.itinerary && translatedTour.itinerary.length > 0 && (
              <div>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F27D26] mb-6 md:mb-10">
                  {t('common.itinerary')}
                </h2>
                <div className="space-y-4 md:space-y-8">
                  {translatedTour.itinerary.map((item, idx) => (
                    <div key={idx} className="flex gap-4 md:gap-8 group">
                      <span className="text-gray-200 font-black text-xl md:text-3xl tracking-tighter group-hover:text-[#F27D26] transition-colors">
                        0{idx + 1}
                      </span>
                      <p className="text-[11px] md:text-[13px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed pt-1 md:pt-2">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Includes - safely handle if field doesn't exist in data */}
            {tour.includes && Array.isArray(tour.includes) && tour.includes.length > 0 && (
              <div>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F27D26] mb-4 md:mb-6">
                  {i18n.language === 'en' ? 'Included' : 'Incluye'}
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                  {tour.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-600 font-medium">
                      <span className="w-1.5 h-1.5 bg-[#F27D26] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar - CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 lg:top-32 bg-gray-50 p-6 md:p-8 rounded-2xl">
              <h3 className="text-lg md:text-xl font-black text-gray-900 uppercase tracking-tight mb-6">
                {i18n.language === 'en' ? 'Book This Tour' : 'Reservar Este Tour'}
              </h3>
              
              <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">
                {i18n.language === 'en' 
                  ? 'Contact us to get more information and availability for this amazing experience.'
                  : 'Contáctanos para obtener más información y disponibilidad de esta increíble experiencia.'}
              </p>

              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="w-full bg-gray-900 text-white py-4 md:py-5 font-black text-[11px] uppercase tracking-[0.3em] hover:bg-[#F27D26] transition-all duration-500 rounded-lg"
              >
                {i18n.language === 'en' ? 'Contact Us' : 'Contáctanos'}
              </button>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-[9px] uppercase font-bold text-gray-400 tracking-[0.2em] mb-3">
                  {i18n.language === 'en' ? 'Share this tour' : 'Compartir este tour'}
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: translatedTour.title,
                          url: window.location.href
                        });
                      }
                    }}
                    className="flex-1 py-2 border border-gray-200 text-gray-500 text-[10px] font-bold uppercase tracking-wider hover:border-[#F27D26] hover:text-[#F27D26] transition-colors rounded"
                  >
                    {i18n.language === 'en' ? 'Share' : 'Compartir'}
                  </button>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                    }}
                    className="flex-1 py-2 border border-gray-200 text-gray-500 text-[10px] font-bold uppercase tracking-wider hover:border-[#F27D26] hover:text-[#F27D26] transition-colors rounded"
                  >
                    {i18n.language === 'en' ? 'Copy Link' : 'Copiar Link'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Tours Section */}
      {otherTours.length > 0 && (
        <div className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-12">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
                {i18n.language === 'en' ? 'Other Tours' : 'Otros Tours'}
              </h2>
              <p className="text-gray-500 mt-3 text-sm md:text-base">
                {i18n.language === 'en' 
                  ? 'Discover more amazing experiences in Ecuador' 
                  : 'Descubre más experiencias increíbles en Ecuador'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {otherTours.map((otherTour) => {
                const translated = translateTour(otherTour, i18n.language);
                const img: any = otherTour.image;
                const imgSrc = img?.asset?._ref 
                  ? urlFor(img).width(800).height(600).fit('crop').auto('format').url()
                  : '/assets/home.jpeg';
                
                const otherSlug = otherTour.slug?.current 
                  || otherTour.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                
                return (
                  <motion.div
                    key={otherTour.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                    onClick={() => navigate(`/tours/${otherSlug}`)}
                  >
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={imgSrc}
                        alt={translated.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/home.jpeg';
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-black text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5">
                          {otherTour.region}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="text-sm md:text-base font-black uppercase text-gray-900 group-hover:text-[#F27D26] transition-colors truncate">
                        {translated.title}
                      </h3>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                          {otherTour.duration}
                        </span>
                        <div className="flex items-center gap-1 text-[#F27D26]">
                          <span className="text-[10px] font-bold uppercase tracking-wider">
                            {i18n.language === 'en' ? 'View' : 'Ver'}
                          </span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center mt-10 md:mt-14">
              <button 
                onClick={() => navigate('/#tours')}
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 hover:bg-[#F27D26] transition-colors font-bold text-[11px] tracking-[0.2em] rounded-lg"
              >
                {i18n.language === 'en' ? 'View All Tours' : 'Ver Todos los Tours'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        preselectedTour={tour.title}
      />
    </div>
    </>
  );
}
