import React, { useState, useEffect } from 'react';
import { useBookingFormContext } from '../context/BookingFormContext';
import { useStyleContext } from "../context/StyleContext";
import { validateEmail } from "../utils";

import ErrorMessage from './ErrorMessage';

import './BookingForm.css';

const BookingForm = () => {
  const { showBookingForm, closeBookingForm } = useBookingFormContext();
  const {
    classSectionTitle,
    classLeadText,
    classHeroText,
    classHighlightText,
    classParagraphText,
    classSectionCategories,
    classCardTitle
  } = useStyleContext();

  const [formState, setFormState] = useState({
    firstName: { value: "", isTouched: false },
    lastName: "",
    email: { value: "", isTouched: false },
    password: { value: "", isTouched: false },
    role: { value: "role", isTouched: false },
  });

  const getIsFormValid = () => {
    const { firstName, email, password, role } = formState;

    return firstName.value && validateEmail(email.value) && password.value.length >= 8 && role.value !== "role";
  };

  const clearForm = () => {
    setFormState({
      firstName: { value: "", isTouched: false },
      lastName: "",
      email: { value: "", isTouched: false },
      password: { value: "", isTouched: false },
      role: { value: "role", isTouched: false },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFormState = {
      firstName: {
        ...formState.firstName,
        isTouched: true,
      },
      email: {
        ...formState.email,
        isTouched: true,
      },
      password: {
        ...formState.password,
        isTouched: true,
      },
      role: {
        ...formState.role,
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
              <input className={classParagraphText} id="contactNumber" type="text" placeholder="1-XXX-XXX-XXXX" value={formState.firstName.value}
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
              <label className={classLeadText} htmlFor="res-date">
                Date <sup>*</sup>
              </label>
              <input className={classParagraphText} id="res-date" type="date" value={formState.firstName.value}
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
              <label className={classLeadText} htmlFor="res-time">
                Time
              </label>
              <select className={classParagraphText} id="res-time" value={formState.role.value}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    role: {
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
              <ErrorMessage message={formState.role.isTouched && formState.role.value === "role" ? "Role is required" : null} />
            </div>

            <div className="Field">
              <label className={classLeadText} htmlFor="guests">
                Number of Guests <sup>*</sup>
              </label>
              <input className={classParagraphText} id="guests" type="number" placeholder="1" min="1" max="10" value={formState.firstName.value}
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
              <label className={classLeadText} htmlFor="occasion">
                Occasion
              </label>
              <select className={classParagraphText} id="occasion" value={formState.role.value}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    role: {
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
              <ErrorMessage message={formState.role.isTouched && formState.role.value === "role" ? "Role is required" : null} />
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
