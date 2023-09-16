import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { useBookingFormContext } from '../context/BookingFormContext';

// Mock the context providers
jest.mock('../context/BookingFormContext', () => ({
  useBookingFormContext: () => ({
    showBookingForm: false,
    closeBookingForm: jest.fn(),
  }),
}));

jest.mock('../context/StyleContext', () => ({
  useStyleContext: () => ({
    classLeadText: 'lead-text-class',
    classParagraphText: 'paragraph-text-class',
    classSectionCategories: 'section-categories-class',
  }),
}));

// Mock the utils functions
jest.mock('../utils', () => ({
  dateToday: () => '2023-09-16',
  validatePhone: (phone) => /^\d{3}-\d{3}-\d{4}$/.test(phone),
  validateDate: (date) => /^\d{4}-\d{2}-\d{2}$/.test(date),
}));

test('renders BookingForm component', () => {
  const { getByText, getByLabelText } = render(<BookingForm />);
  
  // Check that the component renders properly
  expect(getByText('Reserve a Table')).toBeInTheDocument();

  // Check for form elements
  expect(getByLabelText('Name')).toBeInTheDocument();
  expect(getByLabelText('Contact Number')).toBeInTheDocument();
  expect(getByLabelText('Date')).toBeInTheDocument();
  expect(getByLabelText('Time')).toBeInTheDocument();
  expect(getByLabelText('Number of Guests')).toBeInTheDocument();
  expect(getByLabelText('Occasion')).toBeInTheDocument();
  expect(getByText('Submit')).toBeInTheDocument();
  expect(getByText('Cancel')).toBeInTheDocument();
  expect(getByText('x')).toBeInTheDocument();
});

test('submits form when valid data is entered', () => {
  const { getByLabelText, getByText } = render(<BookingForm />);
  
  // Fill in form with valid data
  fireEvent.change(getByLabelText('Name'), { target: { value: 'John' } });
  fireEvent.change(getByLabelText('Contact Number'), { target: { value: '123-456-7890' } });
  fireEvent.change(getByLabelText('Date'), { target: { value: '2023-09-17' } });
  fireEvent.change(getByLabelText('Number of Guests'), { target: { value: '5' } });
  
  fireEvent.click(getByText('Submit'));
  
  // Assert that the form has been cleared
  expect(getByLabelText('Name').value).toBe('');
  expect(getByLabelText('Contact Number').value).toBe('');
  expect(getByLabelText('Date').value).toBe('2023-09-16'); // dateToday() mocked to '2023-09-16'
  expect(getByLabelText('Number of Guests').value).toBe('1'); // Default value is 1
});

test('displays error messages for invalid data', () => {
  const { getByLabelText, getByText } = render(<BookingForm />);
  
  fireEvent.change(getByLabelText('Contact Number'), { target: { value: 'invalid' } });
  fireEvent.click(getByText('Submit'));
  
  // Assert that an error message is displayed
  expect(getByText('Contact number is invalid')).toBeInTheDocument();
  
  // Assert that closeBookingForm function was not called
  expect(useBookingFormContext().closeBookingForm).not.toHaveBeenCalled();
});
