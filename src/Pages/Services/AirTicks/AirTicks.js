import React, { useContext } from 'react';
import { Col, Form, Row, ToastContainer } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const AirTicks = () => {
    const { user } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = event => {
        const name = user?.displayName;
        const email = user?.email;
        const number = event.number;
        const message = event.message;
        const category = "air";

        console.log(name, email, number, message);
        const newData = {name, email, number, message, category};


        fetch('http://localhost:5000/tickets', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
            })
            .catch(error => console.log(error));

}

return (
    <div className="m-5">
        <p className='text-uppercase display-4 fw-bold'>Air Tickets</p>
        <Row className="align-items-center">
            <Col md={6} sm={12}>
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
            <Col className="col">
                <p className='fs-3'>Contact Information</p>

            </Col>
        </Row>
    </div >
);
};

export default AirTicks;