import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import BookForm from "../Pages/BookForm/BookForm";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AddTours from "../Pages/Dashboard/AddTours/AddTours";
import Booked from "../Pages/Dashboard/Booked/Booked";
import Flights from "../Pages/Dashboard/Flights/Flights";
import Hotels from "../Pages/Dashboard/Hotels/Hotels";
import Tours from "../Pages/Dashboard/Tours/Tours";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Places from "../Pages/Places/Places";
import Domestic from "../Pages/Services/Domestic/Domestic";
import International from "../Pages/Services/International/International";
import Trending from "../Pages/Services/Trending/Trending";
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
            },
            {
                path: '/contactus',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/domestic',
                element: <Domestic></Domestic>
            },
            {
                path: '/international',
                element: <International></International>
            },
            {
                path: '/trending',
                element: <Trending></Trending>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/tours',
                element: <Tours></Tours>
            },
            {
                path: '/dashboard/hotels',
                element: <Hotels></Hotels>
            },
            {
                path: '/dashboard/flights',
                element: <Flights></Flights>
            },
            {
                path: '/dashboard/booked',
                element: <Booked></Booked>
            },
            {
                path: '/dashboard/addtours',
                element: <AddTours></AddTours>
            }
        ]

    }
])

export default router;