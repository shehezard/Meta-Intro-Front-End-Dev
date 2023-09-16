import React, { useState, useEffect } from 'react';
import { useBookingFormContext } from '../context/BookingFormContext';
import { useStyleContext } from "../context/StyleContext";
import { dateToday, validatePhone, validateDate } from "../utils";

import ErrorMessage from './ErrorMessage';

import './BookingForm.css';

const BookingForm = () => {
  const { showBookingForm, closeBookingForm } = useBookingFormContext();
  const {
    classLeadText,
    classParagraphText,
    classSectionCategories,
  } = useStyleContext();

  const [formState, setFormState] = useState({
    firstName: { value: "", isTouched: false },
    contact: { value: "", isTouched: false },
    date: { value: dateToday(), isTouched: false },
    time: { value: "5:00 PM", isTouched: false },
    guests: { value: 1, isTouched: false },
    occasion: { value: "Causal", isTouched: false },
  });

  const getIsFormValid = () => {
    const { firstName, contact, date, guests } = formState;

    return firstName.value && validatePhone(contact.value) && validateDate(date.value) && (guests.value >= 1 && guests.value <= 10);
  };

  const clearForm = () => {
    setFormState({
      firstName: { value: "", isTouched: false },
      contact: { value: "", isTouched: false },
      date: { value: dateToday(), isTouched: false },
      time: { value: "5:00 PM", isTouched: false },
      guests: { value: 1, isTouched: false },
      occasion: { value: "Causal", isTouched: false },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFormState = {
      firstName: {
        ...formState.firstName,
        isTouched: true,
      },
      contact: {
        ...formState.contact,
        isTouched: true,
      },
      date: {
        ...formState.date,
        isTouched: true,
      },
      time: {
        ...formState.time,
        isTouched: true,
      },
      guests: {
        ...formState.guests,
        isTouched: true,
      },
      occasion: {
        ...formState.occasion,
        isTouched: true,
      },
    };

    if (getIsFormValid()) {
      // Submit to API
      clearForm();
      closeBookingForm();
    } else {
      setFormState(newFormState);
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();

    clearForm();
    closeBookingForm();
  };

  useEffect(() => {
    if (showBookingForm) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showBookingForm]);

  return (
    <div className={`booking-container ${showBookingForm ? 'active' : ''}`}>
      <div className="booking-content">
        <h2 className={classSectionCategories}>Reserve a Table</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>

            <div className="Field">
              <label className={classLeadText} htmlFor="firstName">
                Name <sup>*</sup>
              </label>
              <input className={classParagraphText} id="firstName" type="text" placeholder="First name" value={formState.firstName.value}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    firstName: {
                      value: e.target.value,
                      isTouched: true,
                    }
                  });
                }}
              />
              <ErrorMessage message={formState.firstName.isTouched && !formState.firstName.value ? "First name is required" : null} />
            </div>

            <div className="Field">
              <label className={classLeadText} htmlFor="contactNumber">
                Contact Number <sup>*</sup>
              </label>
              <input className={classParagraphText} id="contactNumber" type="text" placeholder="XXX-XXX-XXXX" value={formState.contact.value}
                onChange={(e) => {
                  const inputValue = e.target.value;

                  if (/^[0-9-]*$/.test(inputValue)) {
                    setFormState({
                      ...formState,
                      contact: {
                        value: inputValue,
                        isTouched: true,
                      }
                    });
                  }
                }}
              />
              <ErrorMessage message={formState.contact.isTouched && !validatePhone(formState.contact.value) ? "Contact number is invalid" : null} />
            </div>

            <div className="Field">
              <label className={classLeadText} htmlFor="res-date">
                Date <sup>*</sup>
              </label>
              <input className={classParagraphText} id="res-date" type="date" value={formState.date.value}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    date: {
                      value: e.target.value,
                      isTouched: true,
                    }
                  });
                }}
              />
              <ErrorMessage message={formState.date.isTouched && !validateDate(formState.date.value) ? "Date is invalid" : null} />
            </div>

            <div className="Field">
              <label className={classLeadText} htmlFor="res-time">
                Time
              </label>
              <select className={classParagraphText} id="res-time" value={formState.time.value}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    time: {
                      value: e.target.value,
                      isTouched: true,
                    }
                  });
                }}
              >
                <option>5:00 PM</option>
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
                <option>10:00 PM</option>
              </select>
            </div>

            <div className="Field">
              <label className={classLeadText} htmlFor="guests">
                Number of Guests <sup>*</sup>
              </label>
              <input className={classParagraphText} id="guests" type="number" value={formState.guests.value}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    guests: {
                      value: e.target.value,
                      isTouched: true,
                    }
                  });
                }}
              />
              <ErrorMessage message={formState.guests.isTouched && !(formState.guests.value >= 1 && formState.guests.value <= 10) ? "Enter number of guests between 1 & 10" : null} />
            </div>

            <div className="Field">
              <label className={classLeadText} htmlFor="occasion">
                Occasion
              </label>
              <select className={classParagraphText} id="occasion" value={formState.occasion.value}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    occasion: {
                      value: e.target.value,
                      isTouched: true,
                    }
                  });
                }}
              >
                <option>Causal</option>
                <option>Formal</option>
                <option>Party</option>
              </select>
            </div>

          </fieldset>
          <button className="submit-button" type="submit">Submit</button>
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          <button className="close-button" onClick={handleCancel}>x</button>
        </form>

      </div>
    </div>
  );
};

export default BookingForm;
