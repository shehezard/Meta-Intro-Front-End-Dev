import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/menu" element={<MenuPage />}></Route>
            </Routes>
        </main>
    );
};

export default Main;