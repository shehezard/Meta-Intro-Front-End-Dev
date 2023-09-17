import React, { useState, useEffect } from 'react';
import { useBookingFormContext } from '../context/BookingFormContext';
import { useStyleContext } from "../context/StyleContext";

import { fetchTimes, submitAPI } from "../database/API";

import { dateToday, validatePhone, validateDate } from "../utils";

import ErrorMessage from './ErrorMessage';

import './BookingForm.css';

const BookingForm = () => {
  const {
    showBookingForm,
    closeBookingForm,
    showBookingConfirmation
  } = useBookingFormContext();
  const {
    classLeadText,
    classParagraphText,
    classSectionCategories,
  } = useStyleContext();

  const [bookingTimes, setBookingTimes] = useState([]);
  const [formValid, setFormValid] = useState(false);

  const initializeBookingTime = (times) => {
    if (times === false) {
      if (bookingTimes.length > 0) {
        return bookingTimes[0].time;
      }
    } else {
      if (times.length > 0) {
        return times[0].time;
      }
    }
    return "No available time slots";
  };

  const [formState, setFormState] = useState({
    firstName: { value: "", isTouched: false },
    contact: { value: "", isTouched: false },
    date: { value: dateToday(), isTouched: false },
    time: { value: "5:00 PM", isTouched: false },
    guests: { value: 1, isTouched: false },
    occasion: { value: "Casual", isTouched: false },
  });

  const getIsFormValid = () => {
    const { firstName, contact, date, time, guests } = formState;

    let isValid = firstName.value !== "" && validatePhone(contact.value) && validateDate(date.value) && time.value !== "No available time slots" && (guests.value >= 1 && guests.value <= 10);

    setFormValid(isValid);

    return isValid;
  };

  const clearForm = () => {
    setFormState({
      firstName: { value: "", isTouched: false },
      contact: { value: "", isTouched: false },
      date: { value: dateToday(), isTouched: false },
      time: { value: "5:00 PM", isTouched: false },
      guests: { value: 1, isTouched: false },
      occasion: { value: "Casual", isTouched: false },
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

    if (!getIsFormValid()) {
      setFormState(newFormState);
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();

    setFormValid(false);
    clearForm();
    closeBookingForm();
  };

  useEffect(() => {
    if (showBookingForm) {
      document.body.style.overflowY = "hidden";

      setFormState({
        ...formState,
        time: {
          value: initializeBookingTime(false),
          isTouched: false,
        }
      });
    } else {
      document.body.style.overflowY = "auto";
    }

  }, [showBookingForm]);

  useEffect(() => {
    fetchTimes(formState.date.value, (times) => {
      setBookingTimes(times);

      setFormState({
        ...formState,
        time: {
          value: initializeBookingTime(times),
          isTouched: false,
        }
      });

    });

  }, [formState.date.value]);

  useEffect(() => {
    if (formValid) {
      submitAPI(formState);

      setFormValid(false);
      clearForm();
      closeBookingForm();

      showBookingConfirmation();
    }

  }, [formValid]);

  return (
    <div className={`booking-container ${showBookingForm ? 'active' : ''}`}>
      <div className="booking-content">
        <h2 className={classSectionCategories}>Reserve a Table</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>

            <div className="Field">
              <label className={classLeadText} htmlFor="firstName">
                Name
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
                Contact Number
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
                Date
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
                {bookingTimes.map((time) => (
                  <option key={time.id}>{time.time}</option>
                ))}
              </select>
              <ErrorMessage message={formState.time.value === "No available time slots" ? "No available time slots" : null} />
            </div>

            <div className="Field">
              <label className={classLeadText} htmlFor="guests">
                Number of Guests
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
                <option>Casual</option>
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
