import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/New";
import Message from "../pages/Message";

const routes = [
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/home",
        element: <Home />,
        children: [
            {
                path: "/home/news",
                element: <News />
            },
            {
                path: "/home/message",
                element: <Message />
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/home" />
    }
]

export default routes