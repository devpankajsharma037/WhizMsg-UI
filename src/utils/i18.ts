import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./resources/en.json";
import arTranslation from "./resources/ar.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
  },
});

export default i18n;