import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import KittyList from '../screens/kitty-list/kitty-list';
import NotFound from '../screens/not-found/not-found';

export default function RouterMain() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<KittyList />} path="/" />
                <Route element={<NotFound />} path="*" />
            </Routes>
        </BrowserRouter>
    );
}
