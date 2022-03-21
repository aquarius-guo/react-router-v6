import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      Home
      <NavLink to="news">home-news</NavLink>
      <NavLink to="message">home-message</NavLink>
      <Outlet />
    </div>
  )
}

export default Home
