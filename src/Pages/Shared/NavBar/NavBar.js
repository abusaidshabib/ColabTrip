import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Asset 1.png'
import { AuthContext } from '../../../Context/UserContext/UserContext';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


const NavBar = () => {
    const { logOut, user } = useContext(AuthContext);

    return (


        <>
            {[false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand}>
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >

                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Link to="/" className='nav-link'>Home</Link>
                                    <NavDropdown
                                        title="Services"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <Link to="/trending" className='dropdown-item'>Trending Tour</Link>
                                        <Link to="/airtickets" className='dropdown-item'>Air Tickets</Link>
                                        <Link to="/bustickets" className='dropdown-item'>Bus Tickets</Link>
                                        <Link to="/shiptickets" className='dropdown-item'>Ship Tickets</Link>
                                    </NavDropdown>
                                    <NavDropdown
                                        title="Destinations"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <Link to="/domestic" className='dropdown-item'>Domestic Tour</Link>
                                        <Link to="/international" className='dropdown-item'>International</Link>
                                    </NavDropdown>
                                    <Link className='nav-link' to="/gallery">Gallery</Link>
                                    <Link className='nav-link' to="/about">About Us</Link>
                                    <Link className='nav-link' to="/contactus">Contact Us</Link>
                                    <Link className='nav-link' to="/dashboard/tours">Dashboard</Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>

                        <Link className='navbar-brand' to="/"><img className="w-25" alt="" src={logo} /></Link>

                        <div class="row">
                            {
                                user?.uid ? <Link className='text-uppercase btn btn-primary fw-semibold' onClick={logOut}>
                                    logout
                                </Link>
                                    :
                                    <div className='nav'>
                                        <div className='col'>
                                            <Link className='btn btn-dark fw-semibold nav-link text-white' to="/login">Login</Link>
                                        </div>
                                        <div className='col'>
                                            <Link className='btn btn-dark fw-semibold nav-link text-white ms-2' to="signup">Resister</Link>
                                        </div>
                                    </div>
                            }
                        </div>




                    </Container>
                </Navbar>
            ))}
        </>
    );
};

export default NavBar;