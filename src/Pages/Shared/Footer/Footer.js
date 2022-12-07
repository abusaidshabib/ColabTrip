import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className='row container m-auto py-5'>
                <div className='col text-white text-start'>
                    <span className="fw-semibold fs-2">Services</span>
                    <Link to="/" className="nav-link fs-6 text-uppercase fw-semibold">Branding</Link>
                    <Link to="/" className="nav-link fs-6 text-uppercase fw-semibold">Design</Link>
                    <Link to="/" className="nav-link fs-6 text-uppercase fw-semibold">Marketing</Link>
                    <Link to="/" className="nav-link fs-6 text-uppercase fw-semibold">Advertisement</Link>
                </div>
                <div className='col text-white text-center'>
                    <span className="fw-semibold fs-2">Company</span>
                    <Link to="/" className="nav-link fs-6 text-uppercase fw-semibold">About us</Link>
                    <Link to="/" className="nav-link fs-6 text-uppercase fw-semibold">Contact</Link>
                    <Link to="/" className="nav-link fs-6 text-uppercase fw-semibold">Jobs</Link>
                    <Link to="/" className="nav-link fs-6 text-uppercase fw-semibold">Press kit</Link>
                </div>
                <div className='col text-white text-end'>
                    <span className="fw-semibold fs-2">Legal</span>
                    <Link to="/" className="nav-link fs-6 text-uppercase fw-semibold">Terms of use</Link>
                    <Link to="/" className="nav-link fs-6 text-uppercase fw-semibold">Privacy policy</Link>
                    <Link to="/" className="nav-link fs-6 text-uppercase fw-semibold">Cookie policy</Link>
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