import React from 'react';

import BookingForm from '../components/BookingForm';

const BookingPage = () => {
    return (
        <>
        <BookingForm />
            <section className="contact" id="contact">
                <div className="address">
                    <h2>Contact Us</h2>
                    <p>Little Lemon</p>
                    <p>123 Lemon Street</p>
                    <p>Toronto, ON M1M 1M1</p>
                    <p>416-123-4567</p>
                </div>
                <div className="hours">
                    <h2>Hours</h2>
                    <p>Monday - Friday: 11am - 10pm</p>
                    <p>Saturday - Sunday: 12pm - 10pm</p>
                </div>
            </section>
        </>
    );
};

export default BookingPage;