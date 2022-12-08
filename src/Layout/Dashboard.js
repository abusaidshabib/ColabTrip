import NavBar from '../Pages/Shared/NavBar/NavBar';
import './Dashboard.css';
import { FaStream } from 'react-icons/fa';
import { RiHotelLine } from 'react-icons/ri';
import { GiIsland, GiCommercialAirplane } from 'react-icons/gi';
import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = () => {
    const [sideNav, setSideNav] = useState(false);
    console.log(sideNav);

    const handleSideNav = () =>{
        setSideNav(!sideNav)
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className='dashboard-container d-flex'>
                <div className={`sidebar md-expand-sidenav ${sideNav? 'm-0': ''}`} id='side_nav'>
                    <div className="header-box text-center px-3 pt-4 pb-3">
                        <h1 className='fs-5 text-center text-white'>Dashboard</h1>
                    </div>

                    <ul className='list-unstyled px-3 text-start'>
                        <li><NavLink to='/dashboard/tours' className='d-flex justify-content-between align-items-center py-2 my-2 px-3 rounded text-decoration-none text-white'><GiIsland className='fs-5' />Tours <span className='py-0 px-2 fs-6 bg-white text-black rounded-circle'>2</span></NavLink>

                        </li>
                        <li><NavLink to='/dashboard/flights' className='d-flex justify-content-between align-items-center py-2 my-2 px-3 rounded text-decoration-none text-white'><GiCommercialAirplane className='fs-5' />Flights <span className='py-0 px-2 fs-6 bg-white text-black rounded-circle'>2</span></NavLink>

                        </li>
                        <li><NavLink to='/dashboard/hotels' className='d-flex justify-content-between align-items-center py-2 my-2 px-3 rounded text-decoration-none text-white'><RiHotelLine className='fs-5' />Hotels <span className='py-0 px-2 fs-6 bg-white text-black rounded-circle'>2</span></NavLink>

                        </li>

                        <li><NavLink to='/dashboard/addtours' className='d-flex justify-content-between align-items-center py-2 my-2 px-3 rounded text-decoration-none text-white'><RiHotelLine className='fs-5' />Add Tours <span className='py-0 px-2 fs-6 bg-white text-black rounded-circle'>2</span></NavLink>
                        </li>
                        <li><NavLink to='/dashboard/booked' className='d-flex justify-content-between align-items-center py-2 my-2 px-3 rounded text-decoration-none text-white'><RiHotelLine className='fs-5' />Booked <span className='py-0 px-2 fs-6 bg-white text-black rounded-circle'>2</span></NavLink>
                        </li>

                    </ul>
                </div>
                <div className='content'>
                    <div className='my-3 d-md-none'><button onClick={handleSideNav} className='btn px-2 py-2 py-0 border'><FaStream /> Toggle</button></div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;