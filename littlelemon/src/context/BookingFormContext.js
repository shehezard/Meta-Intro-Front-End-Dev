import React, { createContext, useContext, useState } from "react";

import { showNotification } from "../utils";

const BookingFormContext = createContext();

export const BookingFormProvider = ({ children }) => {
    const showBookingConfirmation = () => {
        showNotification("Booking Confirmed!");
    };

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
                showBookingConfirmation,
            }}
        >
            {children}
        </BookingFormContext.Provider>
    );

};

export const useBookingFormContext = () => useContext(BookingFormContext);