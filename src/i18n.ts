import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptTranslation from "./locales/pt/translation.json";
import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";
import frTranslation from "./locales/fr/translation.json";
import deTranslation from "./locales/de/translation.json";
import jaTranslation from "./locales/ja/translation.json";
import zhCNTranslation from "./locales/zh-CN/translation.json";

const supportedLanguages = ["pt", "en", "es", "fr", "de", "ja", "zh-CN"] as const;

const normalizeLanguage = (language: string | null) => {
  if (!language) {
    return "pt";
  }

  const normalizedLanguage = language.toLowerCase();

  if (normalizedLanguage.startsWith("zh")) {
    return "zh-CN";
  }

  const exactLanguage = supportedLanguages.find(
    (supportedLanguage) => supportedLanguage.toLowerCase() === normalizedLanguage
  );

  if (exactLanguage) {
    return exactLanguage;
  }

  const baseLanguage = normalizedLanguage.split("-")[0];

  return (
    supportedLanguages.find((supportedLanguage) => supportedLanguage === baseLanguage) || "pt"
  );
};

const savedLanguage = localStorage.getItem("language");
const defaultLanguage = normalizeLanguage(savedLanguage || navigator.language);

const syncDocumentLanguage = (language: string) => {
  const normalizedLanguage = normalizeLanguage(language);
  const languageMap: Record<(typeof supportedLanguages)[number], string> = {
    pt: "pt-BR",
    en: "en",
    es: "es",
    fr: "fr",
    de: "de",
    ja: "ja",
    "zh-CN": "zh-CN",
  };

  document.documentElement.lang = languageMap[normalizedLanguage];
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
      de: { translation: deTranslation },
      ja: { translation: jaTranslation },
      "zh-CN": { translation: zhCNTranslation },
    },
    supportedLngs: supportedLanguages,
    lng: defaultLanguage,
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => syncDocumentLanguage(i18n.language));

export default i18n;
