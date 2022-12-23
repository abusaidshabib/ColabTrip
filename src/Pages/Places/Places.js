import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';


const Places = () => {

    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [dat, setData] = useState();
    const navigate = useNavigate();
    const from = '/';
    useEffect(() => {
        fetch(`https://tripwallet-backend.vercel.app/tours/${localStorage.getItem('Id')}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    })

    const handleLogin = event => {
        const name = user?.displayName;
        const email = user?.email;
        const number = event.number;
        const message = event.message;
        const title = dat?.title;

        console.log(name, email, number, message, title);
        const newData = { name, email, number, message, title };


        fetch('https://tripwallet-backend.vercel.app/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Success fully booked');
                    navigate(from, { replace: true });
                }
            })
            .catch(error => console.log(error));

    }

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
                            <pre className='text-start'>
                                {dat?.details}
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <p className='display-4 fw-bold'>Book Options</p>
                    <Form onSubmit={handleSubmit(handleLogin)} className='text-start'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <input disabled defaultValue={user?.displayName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <input disabled defaultValue={user?.email} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <input {...register("number", { required: "Number is required", minLength: "11" })} placeholder='01xxxxxxxx' type="tel" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {errors.number?.type === 'required' && <p className='text-red-700' role="alert">Email is required</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Message</Form.Label>
                            <textarea {...register("message")} placeholder='Type Your message' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </Form.Group>
                        <input className='btn btn-primary w-100' type="submit" />
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Places;