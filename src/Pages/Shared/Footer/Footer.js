import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../../assets/Asset 1.png';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className='row container m-auto py-5'>
                <div className='col text-white text-start'>
                    <img className='w-25' alt='' src={footerLogo} />
                    <p className='mt-4 mb-1'>Follow us On:</p>
                    <div className='fs-4'>
                        <a className='text-white me-2' href='https://www.facebook.com/tripwallet?mibextid=ZbWKwL'><BsFacebook /></a>
                        <a className='text-white me-2' href='#'><GrInstagram /></a>
                        <a className='text-white' href='#'><BsWhatsapp /></a>
                    </div>
                </div>
                <div className='col text-white text-left'>
                    <span className="fw-semibold fs-4 mb-3">All Services</span>
                    <Link to="/" className="nav-link fs-6">Domestic Tour</Link>
                    <Link to="/" className="nav-link fs-6">International Tour</Link>
                    <Link to="/" className="nav-link fs-6">Trending Tour</Link>
                    <Link to="/" className="nav-link fs-6">Air Tickets</Link>
                    <Link to="/" className="nav-link fs-6">Bus Tickets</Link>
                    <Link to="/" className="nav-link fs-6">Ship Tickets</Link>

                </div>
                <div className='col text-white text-end'>
                    <p>Our Office: House 31/A, Road 21 Nikunja-2, Khilkhet, Dhaka.</p>
                    <p>Call Us:
                        +880 1894-442421,
                        +880 1894-442422,
                        +880 1894-442423,
                        +880 1894-442424,
                        +880 1894-442425,
                        +880 1894-442426
                    </p>
                    <p>Email: tripwalletbd@gmail.com</p>

                </div>
            </div>
            <hr className='text-white' />
            <div className='text-center text-white py-2'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;