import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptTranslation from './locales/pt/translation.json';
import enTranslation from './locales/en/translation.json';

const savedLanguage = localStorage.getItem('language');
const browserLanguage = navigator.language.split('-')[0];
const defaultLanguage = savedLanguage || (['pt', 'en'].includes(browserLanguage) ? browserLanguage : 'pt');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: ptTranslation },
      en: { translation: enTranslation }
    },
    lng: defaultLanguage, 
    fallbackLng: 'pt',  
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;