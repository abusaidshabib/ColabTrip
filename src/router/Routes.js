import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Addreview from "../Pages/AddReview/Addreview";
import BookForm from "../Pages/BookForm/BookForm";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AddImg from "../Pages/Dashboard/AddImg/AddImg";
import AddTours from "../Pages/Dashboard/AddTours/AddTours";
import AllTours from "../Pages/Dashboard/AllTours/AllTours";
import Booked from "../Pages/Dashboard/Booked/Booked";
import Flights from "../Pages/Dashboard/Flights/Flights";
import Hotels from "../Pages/Dashboard/Hotels/Hotels";
import Tours from "../Pages/Dashboard/Tours/Tours";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Places from "../Pages/Places/Places";
import AirTicks from "../Pages/Services/AirTicks/AirTicks";
import Bus from "../Pages/Services/Bus/Bus";
import Domestic from "../Pages/Services/Domestic/Domestic";
import International from "../Pages/Services/International/International";
import Ship from "../Pages/Services/Ship/Ship";
import Trending from "../Pages/Services/Trending/Trending";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
                path: '/places/:id',
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
            },
            {
                path: '/airtickets',
                element: <AirTicks></AirTicks>
            },
            {
                path: '/bustickets',
                element: <Bus></Bus>
            },
            {
                path: '/shiptickets',
                element: <Ship></Ship>
            },
            {
                path: '/addreview',
                element: <Addreview></Addreview>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <AdminRoute><Dashboard></Dashboard></AdminRoute>,
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
            },
            {
                path: '/dashboard/addimg',
                element: <AddImg></AddImg>
            },
            {
                path: '/dashboard/alltours',
                element: <AllTours></AllTours>
            }
        ]

    }
])

export default router;