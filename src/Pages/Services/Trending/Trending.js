import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Trending = () => {
    const BgImg = "https://images.unsplash.com/photo-1669839556036-ba8316adba5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    return (
        <Container className='py-5'>
            <p className='text-uppercase display-4 fw-bold'>Place Name</p>
            <Row xs={1} md={2} lg={3} className="g-5 m-0 py-5">
                <Col className='m-0'>
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
            <Link className='btn btn-outline-dark text-uppercase border-2'>See All Places</Link>
        </Container>
    );
};

export default Trending;