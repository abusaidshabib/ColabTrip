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



                    <Card className='text-white cardSize d-flex justify-content-center align-items-center' style={{ width: '24vw' }}>
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
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link>Another Link</Card.Link>
                        </Card.Body>
                    </Card>





                    <Card className='text-white cardSize d-flex justify-content-center align-items-center' style={{
                        backgroundImage: `url(${BgImg})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: 'auto',
                    }}>
                        <div>
                            <p className='text-uppercase display-6 fw-bold'>Place Name</p>
                            <Link className='btn btn-light text-uppercase fw-semibold'>Make Your Tour</Link>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Link className='btn btn-outline-dark text-uppercase border-2' to='/trending'>See All Places</Link>
        </Container>
    );
};

export default RunningTour;