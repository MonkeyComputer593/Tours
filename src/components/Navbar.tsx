import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ContactModal from './ContactModal';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const isEnglish = i18n.language === 'en';

  const changeLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2 md:py-3' : 'bg-black/40 backdrop-blur-md py-3 md:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo - Click lleva al inicio */}
            <a 
              href="/" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-1.5 md:gap-2"
            >
              <img 
                src="/assets/etsaa.png" 
                alt="ETSAATOURS" 
                className={`h-6 md:h-10 w-auto object-contain ${isScrolled ? '' : 'brightness-0 invert'}`}
              />
              <span className={`text-sm md:text-xl font-black tracking-tight hidden sm:block ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                ETSAA<span className="text-[#F27D26]">TOURS</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-4">
                <a
                  href="#tours"
                  onClick={(e) => scrollToSection(e, '#tours')}
                  className={`text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-[#F27D26] cursor-pointer ${
                      isScrolled ? 'text-gray-600' : 'text-white/90'
                    }`}
                >
                  {t('nav.tours')}
                </a>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, '#about')}
                  className={`text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-[#F27D26] cursor-pointer ${
                      isScrolled ? 'text-gray-600' : 'text-white/90'
                    }`}
                >
                  {t('nav.nosotros')}
                </a>
                <a
                  href="#faq"
                  onClick={(e) => scrollToSection(e, '#faq')}
                  className={`text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-[#F27D26] cursor-pointer ${
                      isScrolled ? 'text-gray-600' : 'text-white/90'
                    }`}
                >
                  {t('nav.faq')}
                </a>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className={`text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-[#F27D26] cursor-pointer ${
                      isScrolled ? 'text-gray-600' : 'text-white/90'
                    }`}
                >
                  {isEnglish ? 'Contact' : 'Contacto'}
                </a>
              </div>
              
              {/* Language Toggle */}
              <button 
                onClick={changeLanguage}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest border transition-colors ${
                  isScrolled 
                    ? 'border-gray-300 text-gray-600 hover:border-[#F27D26] hover:text-[#F27D26]' 
                    : 'border-white/30 text-white hover:border-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                {i18n.language.toUpperCase()}
              </button>
              
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest bg-[#F27D26] text-white hover:bg-orange-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {t('common.reserve')}
              </button>
            </div>

            {/* Mobile Buttons */}
            <div className="flex md:hidden items-center gap-2">
              <button 
                onClick={changeLanguage}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full font-bold text-[9px] uppercase border border-gray-300 text-gray-600"
              >
                <Globe className="w-3.5 h-3.5" />
                {i18n.language.toUpperCase()}
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="p-2 bg-[#F27D26] rounded-full"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-3 py-4 space-y-2">
                <a
                  href="#tours"
                  onClick={(e) => {
                    scrollToSection(e, '#tours');
                    setIsOpen(false);
                  }}
                  className="block text-sm font-bold uppercase text-gray-900 hover:text-[#F27D26] py-2 cursor-pointer"
                >
                  {t('nav.tours')}
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    scrollToSection(e, '#about');
                    setIsOpen(false);
                  }}
                  className="block text-sm font-bold uppercase text-gray-900 hover:text-[#F27D26] py-2 cursor-pointer"
                >
                  {t('nav.nosotros')}
                </a>
                <a
                  href="#faq"
                  onClick={(e) => {
                    scrollToSection(e, '#faq');
                    setIsOpen(false);
                  }}
                  className="block text-sm font-bold uppercase text-gray-900 hover:text-[#F27D26] py-2 cursor-pointer"
                >
                  {t('nav.faq')}
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    scrollToSection(e, '#contact');
                    setIsOpen(false);
                  }}
                  className="block text-sm font-bold uppercase text-gray-900 hover:text-[#F27D26] py-2 cursor-pointer"
                >
                  {isEnglish ? 'Contact' : 'Contacto'}
                </a>
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    setIsContactModalOpen(true);
                  }}
                  className="w-full bg-[#F27D26] text-white py-3 rounded-lg font-bold text-sm mt-2"
                >
                  {t('common.reserveNow')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
