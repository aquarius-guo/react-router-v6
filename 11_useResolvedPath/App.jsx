import React from 'react'
import { NavLink, useRoutes, useNavigationType } from "react-router-dom";
import routes from './routes';

export default function App() {
    const element = useRoutes(routes);
    return (
        <div>
            <h1>App</h1>
            <NavLink to="/about">
                about
            </NavLink>
            <hr />
            <NavLink to="/home">
                home
            </NavLink>
            <hr />
            <hr />
            {element}
        </div>
    )
}
