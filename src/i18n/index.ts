import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translation as es } from './es';
import { translation as en } from './en';

const resources = {
  es: { translation: es },
  en: { translation: en },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // default language
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
