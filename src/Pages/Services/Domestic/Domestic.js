import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const Domestic = () => {
    const {getId} = useContext(AuthContext);
    const [tours, setTour] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tours?category=domestic')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTour(data);
            }, [])
    })

    return (
        <Container className='py-5'>
            <p className='text-uppercase display-4 fw-bold'>DOMESTIC TOUR</p>
            <Row xs={1} md={2} lg={3} className="g-5 m-0 py-5">
                {
                    tours.map(tour => <Col className='m-0 pb-5' key={tour._id}>
                        <Card className='text-white cardSize d-flex justify-content-center align-items-center' style={{
                            backgroundImage: `url(${tour.img})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: 'auto',
                        }}>
                            <div>
                                <p className='text-uppercase display-6 fw-bold'>{tour.title}</p>
                                <Link onClick={()=>getId(`${tour._id}`)} to={`/places/${tour._id}`} className='btn btn-light text-uppercase fw-semibold'>Book Now</Link>
                            </div>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Domestic;