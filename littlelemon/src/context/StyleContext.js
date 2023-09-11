import React, { createContext, useContext, useState } from "react";

const StyleContext = createContext();

export const StyleProvider = ({ children }) => {
    const classSectionTitle = "section-title";
    const classLeadText = "lead-text";
    const classHighlightText = "highlight-text";
    const classSectionCategories = "section-categories";
    const classCardTitle = "card-title";
    const classParagraphText = "paragraph-text";




    const classHeaderButton = "header-button";
    const classFooterLink = "footer-link";
    const classHeroText = "hero-text";


    return (
        <StyleContext.Provider
            value={{
                classHeaderButton,
                classFooterLink,
                classHeroText,
                classSectionTitle,
                classSectionCategories,

                classLeadText,
                classHighlightText,
                classCardTitle,
                classParagraphText,
            }}
        >
            {children}
        </StyleContext.Provider>
    );

};

export const useStyleContext = () => useContext(StyleContext);