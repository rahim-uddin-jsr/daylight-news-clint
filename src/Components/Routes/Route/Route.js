import { createBrowserRouter } from "react-router-dom";
import Category from "../../Category/Category/Category";
import Home from "../../Home/Home";
import Main from "../../Layout/Main/Main";
import Login from "../../Login/Login";
import News from "../../News/News/News";
import Register from "../../Register/Register";
import ResetPassword from "../../ResetPassword/ResetPassword";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/home',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <Category />,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/reset-password',
                element: <ResetPassword />,
            }

        ]
    },
])