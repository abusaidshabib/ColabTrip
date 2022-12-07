import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext/UserContext';
import GoogleSignIn from '../Shared/GoogleSignIn/GoogleSignIn';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('');



    const handleSignUp = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userData = {
                    displayName: data.name
                }
                updateUser(userData)
                    .then(() => {
                        newUser(data.email, data.name, data.category)
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }


    const newUser = (email, name, category) => {
        const newreg = {
            email: email,
            name: name,
            category: category,
        }
        console.log(newreg);

        fetch('=', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newreg)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setUserEmail(email);
                    toast.success('User Create Successfully')
                    reset();
                }
                else {
                    toast.error(data.message)
                }
            })
            .catch(err => console.err(err))
    }

    return (
        <div className="m-5">
            <p className='text-uppercase display-4 fw-bold'>Register Now</p>
            <div class="row align-items-center">
                <div class="col">
                    <GoogleSignIn></GoogleSignIn>
                </div>
                <div class="col">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <input {...register("name", { required: "Name is required" })} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Name' />
                            {errors.email?.type === 'required' && <p className='text-red-700' role="alert">Name is required</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <input {...register("email", { required: "Email is required" })} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email Address' />
                            {errors.email?.type === 'required' && <p className='text-red-700' role="alert">Email is required</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <input {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })} type="password" class="form-control" id="exampleInputPassword1" placeholder='Your Password' />
                            {errors.password?.type === 'required' && <p className='text-warning' role="alert">Password is required</p>}
                        </Form.Group>
                        <p>Already have an account <Link to="/login" className="text-secondary underline">Please Login</Link></p>
                        <input className='btn btn-primary w-100' type="submit" />
                    </Form>
                </div>
            </div>
        </div >
    );
};

export default SignUp;