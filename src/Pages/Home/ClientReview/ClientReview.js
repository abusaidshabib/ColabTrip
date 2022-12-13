import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ClientReview = () => {
    const [reviews, setReview] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    return (
        <Container className='py-5'>
            <p className='text-uppercase display-4 fw-bold'>Client Reviews</p>
            <Row xs={1} md={2} lg={3} className="g-5 m-0 py-5">
                {
                    reviews.map(review => <Col className='m-0' key={review._id}>
                        <Card style={{ width: '18rem' }} className="text-start">
                            <div className='card-body'>
                                <div className='text-center'>
                                    <img className='img-fluid w-25 rounded-circle' src={review.imgUrl} alt="" />
                                    <h6 className="card-title mt-2">Name:{review.name}</h6>
                                </div>
                                <p className="card-text my-3">Review:{review.review}</p>
                            </div>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default ClientReview;