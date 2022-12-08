import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddTours = () => {
    const { register, handleSubmit, reset } = useForm();

    const handleSignUp = (data) => {

    }

    return (
        <div className="m-5">
            <p className='text-uppercase display-4 fw-bold'>Add Tours</p>
            <div class="row align-items-center">

                <Form className='text-start'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tour Location</Form.Label>
                        <input {...register("location", { required: "Location is Required" })} type="text" class="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder='Type Location' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Cover Image (Get link from google drive <b>Must note anyone can view this link</b>)</Form.Label>
                        <input {...register("img", { required: "Image is Required" })} type="url" class="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder='Type Location' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <input {...register("img", { required: "Image is Required" })} type="url" class="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder='Type Location' />
                    </Form.Group>
                    <input className='btn btn-primary w-100' type="submit" />
                </Form>
            </div>
        </div >
    );
};

export default AddTours;