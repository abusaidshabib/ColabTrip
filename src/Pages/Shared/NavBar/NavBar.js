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
    const { logOut, user} = useContext(AuthContext);

    return (

        <>
            {[false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand}>
                    <Container fluid>
                        <Navbar.Brand href="#"><img className="w-25" alt="" src={logo}/></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>

        // <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        //     <Container className='text-white'>
        //         <Link className='navbar-brand' to="/">
        //             <img className='w-25' src={logo} alt="" />
        //         </Link>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="me-auto text-uppercase fs-6" style={{ letterSpacing: '.5px' }}>
        //                 <Link className='nav-link' to="/">Home</Link>
        //                 <NavDropdown title="Services" id="collasible-nav-dropdown">
        //                     <Link className='dropdown-menu' aria-labelledby="navbarDropdown"></Link>
        //                     <Link className='dropdown-item' to="/domestic">DOMESTIC TOUR</Link>
        //                     <Link className='dropdown-item' to="/international">INTERNATIONAL TOUR</Link>
        //                     <Link className='dropdown-item' to="/trending">TRENDING TOUR</Link>
        //                     <Link className='dropdown-item' to="/airtickets">Air Tickets</Link>
        //                     <Link className='dropdown-item' to="/bustickets">Bus Tickets</Link>
        //                     <Link className='dropdown-item' to="/shiptickets">Ship Tickets</Link>
        //                 </NavDropdown>
        //                 <Link className='nav-link' to="/gallery">Gallery</Link>
        //                 <Link className='nav-link' to="/about">About Us</Link>
        //                 <Link className='nav-link' to="/contactus">Contact Us</Link>
        //                 <Link className='nav-link' to="/dashboard/tours">Dashboard</Link>
        //             </Nav>
        //             {
        //                 user?.uid ?
        //                     <Link className='text-uppercase btn btn-primary fw-semibold' onClick={logOut}>
        //                     logout
        //                     </Link>
        //                     :
        //                     <Nav>
        //                         <Nav.Link href="#deets">
        //                             <Link className='btn btn-dark fw-semibold text-uppercase' to="/login">Login</Link>
        //                         </Nav.Link>
        //                         <Nav.Link eventKey={2} href="#memes">
        //                             <Link className='btn btn-dark fw-semibold text-uppercase' to="signup">resister</Link>
        //                         </Nav.Link>
        //                     </Nav>

        //             }
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    );
};

export default NavBar;