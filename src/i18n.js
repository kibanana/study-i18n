import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationKR from './locales/ko.json';
import translationEN from './locales/en.json';
import translationCH from './locales/zh.json';

const resources = {
  ko:{
    translation: translationKR,
  },
  en:{
    translation: translationEN,
  },
  zh:{
    translation: translationCH,
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'ko',
    fallbackLng: 'ko',
    supportedLngs:['ko', 'en', 'zh'],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources,
});

export default i18n;
