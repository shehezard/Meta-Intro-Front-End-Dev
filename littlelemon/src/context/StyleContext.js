import React, { createContext, useContext, useState } from "react";

const StyleContext = createContext();

export const StyleProvider = ({ children }) => {
    const classSectionTitle = "section-title";
    const classLeadText = "lead-text";
    const classHighlightText = "highlight-text";
    const classSectionCategories = "section-categories";
    const classCardTitle = "card-title";
    const classParagraphText = "paragraph-text";

    return (
        <StyleContext.Provider
            value={{
                classSectionTitle,
                classLeadText,
                classHighlightText,
                classSectionCategories,
                classCardTitle,
                classParagraphText,
            }}
        >
            {children}
        </StyleContext.Provider>
    );

};

export const useStyleContext = () => useContext(StyleContext);