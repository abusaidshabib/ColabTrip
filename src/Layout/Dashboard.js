import React from 'react';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import './Dashboard.css';
import { FaStream } from 'react-icons/fa';
import { RiHotelLine } from 'react-icons/ri';
import { GiIsland, GiCommercialAirplane } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='dashboard-container d-flex'>
                <div className='sidebar' id='side_nav'>
                    <div className="header-box px-2 py-3">
                        <h1 className='fs-5 me-2 text-center text-white'>Dashboard</h1>
                        <button className='btn d-block d-md-none close-btn px-1 py-0 text-white'><FaStream /></button>
                    </div>

                    <ul className='list-unstyled px-3 text-start'>
                        <li><NavLink to='/tours' className='d-flex justify-content-between py-2 my-2 px-3 rounded text-decoration-none text-white'><GiIsland className='me-2'/>Tours <span className='py-0 px-2 fs-6 bg-white text-black rounded-circle'>2</span></NavLink>
                            
                        </li>
                        <li><NavLink to='/flights' className='d-flex justify-content-between py-2 my-2 px-3 rounded text-decoration-none text-white'><GiCommercialAirplane className='me-2'/>Flights <span className='py-0 px-2 fs-6 bg-white text-black rounded-circle'>2</span></NavLink>
                            
                        </li>
                        <li><NavLink to='/hotels' className='d-flex justify-content-between py-2 my-2 px-3 rounded text-decoration-none text-white'><RiHotelLine className='me-2'/>Hotels <span className='py-0 px-2 fs-6 bg-white text-black rounded-circle'>2</span></NavLink>
                            
                        </li>
                    </ul>
                </div>
                <div className='content'></div>
            </div>
        </div>
    );
};

export default Dashboard;