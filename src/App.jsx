import React from 'react'
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import About from './pages/About';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Message from './pages/Message';
import News from './pages/New';


export default function App() {
    return (
        <div>
            <h1>App</h1>
            <NavLink to="/about" >
                about
            </NavLink>
            <hr />
            <NavLink to="/home">
                home
            </NavLink>
            <hr />
            <hr />
            <Routes>
                <Route path='about' element={<About />}/>
                <Route path='home' element={<Home />}>
                    <Route path="news" element={<News />}/>
                    <Route path="message" element={<Message />}>
                        <Route path="detail" element={<Detail />}/>
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to="about"/>} />
            </Routes>
        </div>
    )
}
