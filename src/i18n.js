import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

const savedLanguage = localStorage.getItem("lang");
console.log(savedLanguage);

i18next
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: savedLanguage || "en",
    debug: true,
    fallbackLng: "en",
    saveMissing: true,
  });
