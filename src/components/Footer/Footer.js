import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
    {code: "en", lang: "English"},
    {code: "de", lang: "Deutsch"}
];

const Footer = () => {
    const {i18n} = useTranslation();
    const currentLanguage = i18n.language;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-selector">
          <button onClick={() => changeLanguage("en")} className={`lang-btn ${currentLanguage === "en" ? "active" : ""}`}>English</button>
          <button onClick={() => changeLanguage("de")} className={`lang-btn ${currentLanguage === "de" ? "active" : ""}`}>Deutsch</button>
        </div>
      );
}

export default Footer;