import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';
import { useBookingFormContext } from '../context/BookingFormContext';

// Mock the context providers
jest.mock('../context/BookingFormContext', () => ({
  useBookingFormContext: () => ({
    showBookingForm: false,
    closeBookingForm: jest.fn(),
    showBookingConfirmation: jest.fn(),
  }),
}));

jest.mock('../context/StyleContext', () => ({
  useStyleContext: () => ({
    classLeadText: 'lead-text-class',
    classParagraphText: 'paragraph-text-class',
    classSectionCategories: 'section-categories-class',
  }),
}));

// Mock the API functions
const mockAPI = {
  fetchTimes: jest.fn(),
  submitAPI: jest.fn(),
};

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

test('submits form when valid data is entered', async () => {
  const { getByLabelText, getByText } = render(<BookingForm />);

  // Simulate user input
  fireEvent.change(getByLabelText('Name'), { target: { value: 'John Doe' } });
  fireEvent.change(getByLabelText('Contact Number'), { target: { value: '123-456-7890' } });
  fireEvent.change(getByLabelText('Date'), { target: { value: '2023-09-17' } });

  // Mock the API response for fetchTimes
  mockAPI.fetchTimes.mockResolvedValue([
    { id: 1, time: '12:00 PM' },
    { id: 2, time: '1:00 PM' },
  ]);

  fireEvent.change(getByLabelText('Time'), { target: { value: '12:00 PM' } });
  fireEvent.change(getByLabelText('Number of Guests'), { target: { value: '4' } });

  // Submit the form
  fireEvent.click(getByText('Submit'));

  // Wait for the form submission and confirmation
  await (() => {
    // Assert that the API functions were called
    expect(mockAPI.fetchTimes).toHaveBeenCalledTimes(1);
    expect(mockAPI.submitAPI).toHaveBeenCalledTimes(1);

    // Assert that the form was cleared and closeBookingForm was called
    expect(mockContext.closeBookingForm).toHaveBeenCalledTimes(1);

    // Assert that the form has been cleared
    expect(getByLabelText('Name').value).toBe('');
    expect(getByLabelText('Contact Number').value).toBe('');
    expect(getByLabelText('Date').value).toBe('2023-09-16'); // dateToday() mocked to '2023-09-16'
    expect(getByLabelText('Number of Guests').value).toBe('1'); // Default value is 1
  });
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
