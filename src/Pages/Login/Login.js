import React, { useContext, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';
import GoogleSignIn from '../Shared/GoogleSignIn/GoogleSignIn';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const { err, setErr } = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        console.log(errors);
        signIn(data.email, data.password)
            .then(result => {
                result = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                setErr(error.message);
            });
    }
    return (
        <div className="m-5">
            <p className='text-uppercase display-4 fw-bold'>Login Here</p>
            <Row className="align-items-center">
                <Col>
                    <GoogleSignIn></GoogleSignIn>
                </Col>
                <Col>
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
            </Row>
        </div >
    );
};

export default Login;