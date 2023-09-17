import React, { createContext, useContext, useState } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingFormContext = createContext();

export const BookingFormProvider = ({ children }) => {
    const showBookingConfirmation = () => {
        toast.success('Booking Confirmed!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
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