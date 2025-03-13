import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "en",
    resources: {
        en: {
            translation:{
                Status: "Status",
                Species: "Species",
                Gender: "Gender",
                Origin: "Origin"
            }
        },
        de: {
            translation:{
                Status: "Status",
                Species: "Spezies",
                Gender: "Geschlecht",
                Origin: "Herkunft"
            }
        },
    }
})
