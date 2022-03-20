import React from 'react'
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';

export default function App() {
    return (
        <div>
            <h1>App</h1>
            <NavLink className={(a) => {console.log(a)}} to="/about">
                about
            </NavLink>
            <hr />
            <NavLink to="/home">
                home
            </NavLink>
            <hr />
            <hr />
            <Routes>
                <Route path='about' element={<About />} />
                <Route path='home' element={<Home />} />
            </Routes>
        </div>
    )
}
