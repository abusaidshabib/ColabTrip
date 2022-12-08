import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const RunningTour = () => {
    const BgImg = "https://images.unsplash.com/photo-1669839556036-ba8316adba5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    return (
        <Container className='py-5'>
            <p className='text-uppercase display-4 fw-bold'>Trending Tour</p>

            <Row xs={1} md={2} lg={3} className="g-5 m-0 py-5">
                <Col className='m-0'>



                    <Card className='d-flex justify-content-center align-items-center' style={{ width: '24vw' }}>
                        <Card.Img variant="top" style={{
                            width: '24vw',
                            height: '15vw',
                            objectFit: 'cover',
                            position: 'center'
                        }} src={BgImg} />
                        <Card.Body className='text-start text-dark'>
                            <Card.Title>Location</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the.
                            </Card.Text>
                            <Row className='text-dark text-start fw-bold'>
                                <Col>Duration</Col>
                                <Col>fees</Col>
                            </Row>
                            <div className='text-center pt-4'>
                                <Card.Link className='btn btn-primary'>
                                    Book now
                                </Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default RunningTour;