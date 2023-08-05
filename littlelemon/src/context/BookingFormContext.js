import React, { createContext, useContext, useState } from "react";

const BookingFormContext = createContext();

export const BookingFormProvider = ({ children }) => {
    const [showBookingForm, setShowBookingForm] = useState(false);

    const toggleBookingForm = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        setShowBookingForm((prevShowBookingForm) => !prevShowBookingForm);
    };

    const closeBookingForm = () => {
      setShowBookingForm(false);
    };

    return (
        <BookingFormContext.Provider
            value={{
                showBookingForm,
                toggleBookingForm,
                closeBookingForm,
            }}
        >
            {children}
        </BookingFormContext.Provider>
    );

};

export const useBookingFormContext = () => useContext(BookingFormContext);