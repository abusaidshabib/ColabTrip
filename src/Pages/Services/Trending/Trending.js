import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const Trending = () => {
    const {getId} = useContext(AuthContext);
    const [tours, setTour] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tours?category=trending')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTour(data);
            }, [])
    })

    return (
        <Container className='py-5'>
            <p className='text-uppercase display-4 fw-bold'>Trending Tour</p>
            <Row xs={1} md={2} lg={3} className="g-5 m-0 py-5">
                {
                    tours.map(tour => <Col className='m-0 pb-5' key={tour._id}>
                        <Card style={{ width: '24rem' }} className='d-flex justify-content-center align-items-center'>
                            <div className='w-100' style={{ height: '22rem' }}>
                                <Card.Img variant="top" className='h-100' style={{
                                    objectFit: 'cover',
                                    position: 'center'
                                }}
                                    src={tour.img} />
                            </div>
                            <Card.Body className='text-start text-dark'>
                                <Card.Title>{tour.title}</Card.Title>
                                <Card.Text>
                                    {tour.details}
                                </Card.Text>
                                <Row className='text-dark text-start fw-bold'>
                                    <Col>Duration: {tour.duration}</Col>
                                    <Col>Fee: {tour.fee}</Col>
                                </Row>
                                <div className='text-center pt-4'>
                                    <Link onClick={() => getId(`${tour._id}`)} to={`/places/${tour._id}`} className='btn btn-light text-uppercase fw-semibold'>Book Now</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Trending;