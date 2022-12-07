import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ClientReview = () => {
    const BgImg = "https://images.unsplash.com/photo-1669839556036-ba8316adba5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    return (
        <Container className='py-5'>
            <p className='text-uppercase display-4 fw-bold'>Client Reviews</p>
            <Row xs={1} md={2} lg={3} className="g-5 m-0 py-5">
                <Col className='m-0'>
                    <Card style={{ width: '18rem' }} className="text-start">
                        <div className='card-body'>
                            <div>
                                <Row className='text-center'>
                                    <Col className='m-0'>
                                        <img className='img-fluid w-50 rounded-circle' src={BgImg} alt="" />
                                    </Col>
                                    <Col className='m-0 text-start'>
                                        <h5 className="card-title">Abu said shabib</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    </Col>
                                </Row>
                            </div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ClientReview;