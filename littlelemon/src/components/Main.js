import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import MenuPage from '../pages/MenuPage';

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/menu" element={<MenuPage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
        </main>
    );
};

export default Main;