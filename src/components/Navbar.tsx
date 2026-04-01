import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ContactModal from './ContactModal';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const lastScrollY = useRef(0);
  const isEnglish = i18n.language === 'en';

  const isHomePage = !location.pathname.startsWith('/tours');

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setIsScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavClick = (section: string) => {
    setIsOpen(false);

    if (isHomePage) {
      const element = document.getElementById(section);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
      if (section === 'tours') {
        navigate('/');
      } else {
        navigate('/#' + section);
      }
    }
  };

  const changeLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  // Styles
  const bgColor = (!isHomePage || isScrolled) ? 'bg-white' : 'bg-black/40';
  const textColor = (!isHomePage || isScrolled) ? 'text-gray-900' : 'text-white';
  const borderColor = (!isHomePage || isScrolled) ? 'border-gray-200' : 'border-white/20';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 ${bgColor} backdrop-blur-md border-b ${borderColor} transition-transform duration-300 ${
          isHidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button 
              onClick={() => {
                if (isHomePage) {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigate('/');
                }
              }}
            >
              <img 
                src="/assets/etsaa.png" 
                alt="ETSAATOURS" 
                className="h-8 w-auto object-contain"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => handleNavClick('tours')}
                className={`text-sm font-medium hover:text-[#F27D26] transition ${textColor}`}
              >
                {t('nav.tours')}
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`text-sm font-medium hover:text-[#F27D26] transition ${textColor}`}
              >
                {t('nav.nosotros')}
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className={`text-sm font-medium hover:text-[#F27D26] transition ${textColor}`}
              >
                {t('nav.faq')}
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-sm font-medium hover:text-[#F27D26] transition ${textColor}`}
              >
                {isEnglish ? 'Contacto' : 'Contact'}
              </button>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <button 
                onClick={changeLanguage}
                className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold uppercase border transition-colors ${
                  (!isHomePage || isScrolled)
                    ? 'border-gray-300 text-gray-600 hover:border-[#F27D26]' 
                    : 'border-white/30 text-white hover:border-white'
                }`}
              >
                <Globe className="w-3 h-3" />
                {i18n.language.toUpperCase()}
              </button>
              
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold uppercase bg-[#F27D26] text-white hover:bg-orange-600 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                {t('common.reserve')}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 ${textColor}`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              <div className="px-4 py-3 space-y-1">
                <button
                  onClick={() => handleNavClick('tours')}
                  className="block w-full text-left text-base font-medium text-gray-900 hover:text-[#F27D26] py-2.5"
                >
                  {t('nav.tours')}
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="block w-full text-left text-base font-medium text-gray-900 hover:text-[#F27D26] py-2.5"
                >
                  {t('nav.nosotros')}
                </button>
                <button
                  onClick={() => handleNavClick('faq')}
                  className="block w-full text-left text-base font-medium text-gray-900 hover:text-[#F27D26] py-2.5"
                >
                  {t('nav.faq')}
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="block w-full text-left text-base font-medium text-gray-900 hover:text-[#F27D26] py-2.5"
                >
                  {isEnglish ? 'Contacto' : 'Contact'}
                </button>
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    setIsContactModalOpen(true);
                  }}
                  className="w-full bg-[#F27D26] text-white py-3 rounded-lg font-bold text-sm mt-3 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('common.reserveNow')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      <div className="h-16" />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
