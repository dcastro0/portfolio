import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptTranslation from "./locales/pt/translation.json";
import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";
import frTranslation from "./locales/fr/translation.json";

const savedLanguage = localStorage.getItem("language");
const browserLanguage = navigator.language.split("-")[0];
const defaultLanguage =
  savedLanguage || (["pt", "en", "es", "fr"].includes(browserLanguage) ? browserLanguage : "pt");

const syncDocumentLanguage = (language: string) => {
  const languageMap: Record<string, string> = {
    pt: "pt-BR",
    en: "en",
    es: "es",
    fr: "fr",
  };

  document.documentElement.lang = languageMap[language.split("-")[0]] || "pt-BR";
};

i18n.on("languageChanged", syncDocumentLanguage);

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: ptTranslation },
      en: { translation: enTranslation },
      es: { translation: esTranslation },
      fr: { translation: frTranslation },
    },
    lng: defaultLanguage,
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => syncDocumentLanguage(i18n.language));

export default i18n;
