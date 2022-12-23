import React, { useContext } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const AirTicks = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const from = '/';

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = event => {
        const name = user?.displayName;
        const email = user?.email;
        const number = event.number;
        const message = event.message;
        const category = "air";

        console.log(name, email, number, message);
        const newData = {name, email, number, message, category};


        fetch('https://tripwallet-backend.vercel.app/tickets', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Success fully booked');
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error));

}

return (
    <div className="m-5">
        <p className='text-uppercase display-4 fw-bold'>Air Tickets</p>
        <Row className="align-items-center">
            <Col sm={12}>
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
    </div >
);
};

export default AirTicks;