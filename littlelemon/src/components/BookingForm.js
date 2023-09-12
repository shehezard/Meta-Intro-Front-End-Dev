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
                First name <sup>*</sup>
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
              <label className={classLeadText} htmlFor="lastName">Last name</label>
              <input className={classParagraphText} id="lastName" type="text" placeholder="Last name" value={formState.lastName}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    lastName: e.target.value,
                  });
                }}
              />
            </div>
            <div className="Field">
              <label className={classLeadText} htmlFor="email">
                Email address <sup>*</sup>
              </label>
              <input className={classParagraphText} id="email" type="email" placeholder="Email address" value={formState.email.value}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    email: {
                      value: e.target.value,
                      isTouched: true,
                    }
                  });
                }}
              />
              <ErrorMessage message={formState.email.isTouched && !validateEmail(formState.email.value) ? "Email address is invalid" : null} />
            </div>
            <div className="Field">
              <label className={classLeadText} htmlFor="password">
                Password <sup>*</sup>
              </label>
              <input className={classParagraphText} id="password" type="password" placeholder="Password" value={formState.password.value}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    password: {
                      value: e.target.value,
                      isTouched: true,
                    }
                  });
                }}
              />
              <ErrorMessage message={formState.password.isTouched && formState.password.value.length < 8 ? "Password must be at least 8 characters" : null} />
            </div>
            <div className="Field">
              <label className={classLeadText}>
                Role <sup>*</sup>
              </label>
              <select className={classParagraphText} value={formState.role.value}
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
                <option value="role">Role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
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
