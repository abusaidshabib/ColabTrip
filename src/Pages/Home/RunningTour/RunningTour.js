import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';


const RunningTour = () => {
    const { getId } = useContext(AuthContext);
    const [tours, setTour] = useState([]);

    useEffect(() => {
        fetch('https://tripwallet-backend.vercel.app/tours?category=trending')
            .then(res => res.json())
            .then(data => {
                setTour(data);
            }, [])
    })
    return (
        <Container className='py-5'>
            <p className='text-uppercase display-4 fw-bold'>Trending Tour</p>
            <Row xs={1} md={2} lg={3} className="g-5 m-0 py-5">
                {
                    tours.map(tour => <span className="">
                        <div className='w-100' style={{ height: '22rem' }}>
                            <Card.Img variant="top" className='h-100 rounded-top' style={{
                                objectFit: 'cover',
                                position: 'center'
                            }}
                                src={tour.img} />
                        </div>
                        <div className="card-body">
                            <p className='display-6 fw-bold'>{tour.title}</p>
                            <p className='fw-semibold fs-6'>Duration: {tour.duration}</p>
                            <p className='fw-semibold fs-6'>Fee: {tour.fee}</p>
                            <Link onClick={() => getId(`${tour._id}`)} to={`/places/${tour._id}`} className='btn btn-light text-uppercase fw-semibold'>Book Now</Link>
                        </div>
                    </span>)
                }
            </Row>
            <Link className='btn btn-outline-dark text-uppercase border-2' to='/trending'>See All Places</Link>
        </Container>
    );
};

export default RunningTour;