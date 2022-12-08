import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddTours = () => {
    const { register, handleSubmit, reset } = useForm();

    const handleSignUp = event => {
        event.preventDefault();
        console.log(event);
        const form = event.target;
        const location = form.location.value;
        const title = form.title.value;
        const img = form.img.value;
        const details = form.details.value;
        const sdate = form.sdate.value;
        const edate = form.edate.value;
        const duration = form.duration.value;
        const fee = form.fee.value;
        const size = form.size.value;
        const language = form.language.value;
        const condition = form.condition.value;

        console.log(location, title, img, details, sdate, edate, duration, fee, size, language, condition);

    }

    return (
        <div className="m-5">
            <p className='text-uppercase display-4 fw-bold'>Add Tours</p>
            <div className="row align-items-center">

                <Form className='text-start' onSubmit={handleSignUp}>


                    {/* Locations */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tour Location</Form.Label>
                        <select name='condition' className='text-uppercase font-normal'>
                            <option>Domestic Tour</option>
                            <option>International Tour</option>
                            <option>Trending Tour</option>
                        </select>

                        <Form.Label>Tour Location</Form.Label>
                        <input {...register("location", { required: "Location is Required" })} type="text" className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder='Type Location' />
                    </Form.Group>
                    {/* Title */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <input {...register("title", { required: "Title is Required" })} type="text" className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder='Tour Title' />
                    </Form.Group>
                    {/* Image link */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Cover Image (Get link from google drive <b>Must note anyone can view this link</b>)</Form.Label>
                        <input {...register("img", { required: "Image is Required" })} type="url" className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder='Image link from google drive' />
                    </Form.Group>
                    {/* Details */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Details</Form.Label>
                        <textarea{...register("details", { required: "Details is Required" })} type="text" className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder='Tour details' />
                    </Form.Group>
                    {/* Tour start Date */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>TourDate (<b>Starting</b>)</Form.Label>
                        <input {...register("sdate", { required: "Starting Date is Required" })} type="date" className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder='Tour Starting Date' />
                    </Form.Group>
                    {/* Tour end Date */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>TourDate (<b>Ending</b>)</Form.Label>
                        <input {...register("edate", { required: "Ending Date is Required" })} type="date" className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder='Tour Ending Date' />
                    </Form.Group>
                    {/* Duration of tour */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Duration <b>(numbers only)</b></Form.Label>
                        <input {...register("duration", { required: "Duration is Required" })} type="number" className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder='Tour Duration' />
                    </Form.Group>
                    {/* PackageFee */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Fees <b>(numbers only)</b></Form.Label>
                        <input {...register("fee", { required: "Fee is Required" })} type="number" className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder='Tour Fee' />
                    </Form.Group>
                    {/* Group Size */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Group Size <b>(numbers only)</b></Form.Label>
                        <input {...register("size", { required: "Group Size is Required" })} type="number" className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder='Group size' />
                    </Form.Group>
                    {/* Language */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Language</Form.Label>
                        <input {...register("language", { required: "Language is Required" })} type="text" className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder='Language' />
                    </Form.Group>
                    {/* <Link className='btn btn-primary w-100'>Submit</Link> */}
                    <input className='btn btn-primary w-100' type="submit" />
                </Form>
            </div>
        </div >
    );
};

export default AddTours;


// Location, duration, title, img, packageFee, TourDate(from-to), Group size, language, details