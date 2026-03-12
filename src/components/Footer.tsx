import React from 'react';
import { Instagram, Youtube, MessageCircle, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WHATSAPP = "+593961906731";
const INSTAGRAM = "etsaatoursec";
const TIKTOK = "etsaatoursec";
const EMAIL = "etsaatoursec@gmail.com";
const ADDRESS = "Macas, Ecuador";
const MAPS_LINK = "https://maps.google.com/?q=Macas+Ecuador";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  
  const scrollToSection = (id: string) => {
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
    <footer className="bg-[#0A0A0A] text-white pt-16 md:pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl md:text-3xl font-black">
              ETSAA<span className="text-[#F27D26]">TOURS</span>
            </span>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            <div className="pt-2">
              <a 
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider hover:text-[#F27D26]"
              >
                <MapPin className="w-4 h-4" />
                {ADDRESS}
              </a>
            </div>
            <div className="pt-1">
              <a 
                href={`https://wa.me/${WHATSAPP.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F27D26] text-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider hover:bg-orange-600"
              >
                <MessageCircle className="w-4 h-4" />
                {t('common.whatsapp')}
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              <a 
                href={`https://instagram.com/${INSTAGRAM}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#F27D26]"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`https://facebook.com/${INSTAGRAM}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#F27D26]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href={`https://youtube.com/@${INSTAGRAM}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#F27D26]"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href={`https://tiktok.com/@${TIKTOK}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#F27D26]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href={`mailto:${EMAIL}`}
                className="text-gray-500 hover:text-[#F27D26]"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links - Secciones de la página */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F27D26] mb-4">{t('footer.explore')}</h4>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider text-gray-500">
              <li><a href="#tours" onClick={(e) => { e.preventDefault(); scrollToSection('tours'); }} className="hover:text-white cursor-pointer">{t('footer.tours')}</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-white cursor-pointer">{t('footer.about')}</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className="hover:text-white cursor-pointer">{t('footer.faq')}</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-white cursor-pointer">{isEnglish ? 'Contact' : 'Contacto'}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-center md:text-left text-[10px] font-bold uppercase tracking-wider text-gray-600">
          <p>© 2024 ETSAATOURS. {t('common.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}
