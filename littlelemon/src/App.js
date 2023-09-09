import React from 'react';

import { BookingFormProvider } from './context/BookingFormContext';
import { StyleProvider } from './context/StyleContext';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import BookingForm from './components/BookingForm';

import './App.css';

function App() {
  return (
    <StyleProvider>
      <BookingFormProvider>
        <div className="App">
          <Header />
          <Main />
          <Footer />
          <BookingForm />
        </div>
      </BookingFormProvider>
    </StyleProvider>
  );
}

export default App;