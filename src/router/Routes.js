import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import BookForm from "../Pages/BookForm/BookForm";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Places from "../Pages/Places/Places";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/places',
                element: <Places></Places>
            },
            {
                path: '/book',
                element: <BookForm></BookForm>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/tours',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/tours',
                
            }
        ]
    }
])

export default router;