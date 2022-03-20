import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

export default [
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "*",
        element: <Navigate to="/home" />
    }
]