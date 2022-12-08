import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AirTicks = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className="m-5">
            <p className='text-uppercase display-4 fw-bold'>Air Tickets</p>
            <Row className="align-items-center">
                <Col md={6} sm={12}>
                    <Form onSubmit={handleSubmit(handleLogin)} className='text-start'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <input {...register("email", { required: "Email is required" })} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email Address' />
                            {errors.email?.type === 'required' && <p className='text-red-700' role="alert">Email is required</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <input {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })} type="password" className="form-control" id="exampleInputPassword1" placeholder='Your Password' />
                            {errors.password?.type === 'required' && <p className='text-warning' role="alert">Password is required</p>}
                        </Form.Group>
                        <span className='text-center'>
                            <p>Don't have an account <Link to="/signup" className="text-secondary underline">Please Register</Link></p>
                        </span>
                        <input className='btn btn-primary w-100' type="submit" />
                    </Form>

                </Col>
                <Col className="col">
                    <p>Rules</p>
                </Col>
            </Row>
        </div >
    );
};

export default AirTicks;