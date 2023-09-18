import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';

const Main = () => {
    return (
        <main className="main" role="main">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
            </Routes>
        </main>
    );
};

export default Main;