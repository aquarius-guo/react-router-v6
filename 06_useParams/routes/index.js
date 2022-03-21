import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/New";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

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
                path: "news",
                element: <News />
            },
            {
                path: "message",
                element: <Message />,
                children: [
                    {
                        path: "detail/:id/:title/:content",
                        element: <Detail />
                    }
                ]
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/home" />
    }
]

export default routes