import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptTranslation from "./locales/pt/translation.json";
import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";

const savedLanguage = localStorage.getItem("language");
const browserLanguage = navigator.language.split("-")[0];
const defaultLanguage =
  savedLanguage || (["pt", "en", "es"].includes(browserLanguage) ? browserLanguage : "pt");

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: ptTranslation },
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: defaultLanguage,
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
