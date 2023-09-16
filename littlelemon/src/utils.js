export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePhone = (phoneNumber) => {
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');

  const canadianPhoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  return canadianPhoneRegex.test(cleanPhoneNumber);
};

export const validateDate = (date) => {

  if (isNaN(Date.parse(date)))
    return false;

  const today = new Date().toISOString().split('T')[0];
  const inputDate = new Date(date).toISOString().split('T')[0];

  return inputDate >= today;
}

export const dateToday = () => {
  return new Date().toISOString().split('T')[0];
}