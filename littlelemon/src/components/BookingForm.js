import "./BookingForm.css";
import { useState } from "react";
import { validateEmail } from "../utils";

const FirstNameErrorMessage = () => {
  return (
    <p className="FieldError">First name cannot be empty</p>
  );
};

const EmailErrorMessage = () => {
  return (
    <p className="FieldError">Invalid email</p>
  );
};

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

const RoleErrorMessage = () => {
  return (
    <p className="FieldError">Select role</p>
  );
};

function BookingForm() {
  const [firstName, setFirstName] = useState({
    value: "",
    isTouched: false,
  });
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState({
    value: "role",
    isTouched: false,
  });

  const getIsFormValid = () => {
    // Implement this function
    return firstName.value && validateEmail(email.value) && (password.value.length >= 8) && (role.value !== "role");
  };

  const clearForm = () => {
    // Implement this function
    setFirstName({
      value: "",
      isTouched: false,
    });
    setLastName("");
    setEmail({
      value: "",
      isTouched: false,
    });
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole({
      value: "role",
      isTouched: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Account created!");
    clearForm();
  };

  return (
    <div className="BookingForm">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="firstName">
              First name <sup>*</sup>
            </label>
            <input id="firstName" type="text" placeholder="First name" value={firstName.value}
            onChange={(e) => {
              setFirstName({ ...firstName, value: e.target.value });
            }}
            onBlur={(e) => {
              setFirstName({ ...firstName, isTouched: true });
            }}
            required="required" />
            {firstName.isTouched && firstName.value === "" ? <FirstNameErrorMessage /> : null }
          </div>
          <div className="Field">
            <label htmlFor="lastName">Last name</label>
            <input id="lastName" type="text" placeholder="Last name" value={lastName} onChange={(e) => { setLastName(e.target.value); }} />
          </div>
          <div className="Field">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input id="email" type="email" placeholder="Email address" value={email.value}
            onChange={(e) => {
              setEmail({ ...email, value: e.target.value });
            }}
            onBlur={(e) => {
              setEmail({ ...email, isTouched: true });
            }}
            required="required" />
            {email.isTouched && !validateEmail(email.value) ? <EmailErrorMessage /> : null }
          </div>
          <div className="Field">
            <label htmlFor="password">
              Password <sup>*</sup>
            </label>
            <input id="password" type="password" placeholder="Password" value={password.value}
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={(e) => {
                setPassword({ ...password, isTouched: true });
              }}
              required="required" />
            {password.isTouched && password.value.length < 8 ? <PasswordErrorMessage /> : null }
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role.value}
            onChange={(e) => {
              setRole({ ...role, value: e.target.value });
            }}
            onBlur={(e) => {
              setRole({ ...role, isTouched: true });
            }}
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
            {role.isTouched && role.value === "role" ? <RoleErrorMessage /> : null }
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default BookingForm;