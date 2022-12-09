import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


const Places = () => {

    const [dat, setData] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/tours/${localStorage.getItem('Id')}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
    })

    return (
        <Container className='py-5'>
            <Row>
                <Col md={8} sm={12}>
                    <Card className="text-center border-0">
                        <Card.Header>
                            <Row>
                                <Col><b>Duration</b><br />
                                    {dat?.duration}
                                </Col>
                                <Col><b>Group Size</b><br />
                                    {dat?.size}
                                </Col>
                                <Col><b>Language</b><br />
                                    {dat?.language}
                                </Col>
                            </Row>
                        </Card.Header>
                        <div className='w-100' style={{ height: '22rem' }}>
                            <Card.Img variant="top" className='h-100' style={{
                                objectFit: 'cover',
                                position: 'center'
                            }}
                                src={dat?.img} />
                        </div>
                        <Card.Body>
                            <Card.Title>{dat?.title}</Card.Title>
                            <Card.Text>
                                {dat?.details}
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