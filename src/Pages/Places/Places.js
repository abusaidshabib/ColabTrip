import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


const Places = () => {

    return (
        <Container className='py-5'>
            <Row>
                <Col md={8} sm={12}>
                    <Card className="text-center border-0">
                        <Card.Header>
                            <Row>
                                <Col><b>Duration</b><br />
                                    here
                                </Col>
                                <Col><b>Group Size</b><br />
                                    here
                                </Col>
                                <Col><b>Language</b><br />
                                    here
                                </Col>
                            </Row>
                        </Card.Header>
                        <div className='w-100' style={{ height: '22rem' }}>
                            <Card.Img variant="top" className='h-100' style={{
                                objectFit: 'cover',
                                position: 'center'
                            }}
                                src="https://images.unsplash.com/photo-1670439072748-c926be6f8d27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
                        </div>
                        <Card.Body>
                            <Card.Title>Details</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <p>Book Options</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Places;