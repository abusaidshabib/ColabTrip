import React from 'react';
import { Form, ToastContainer } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddImg = () => {
    const { register, handleSubmit, reset } = useForm();
    const handleAddImg = event => {
        event.preventDefault();
        const form = event.target;
        const temp = form.img.value;

        let temp1 = temp.replace("https://drive.google.com/file/d/", "");
        let temp2 = temp1.replace("/view?usp=", "");
        let temp3 = temp2.replace("share_link", "");
        let url = temp3.replace("sharing", "");

        const img = `http://drive.google.com/uc?export=view&id=${url}`;

        const newProduct = {
            img
        }

        fetch('http://localhost:5000/gallery', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Item added');

            })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <p className='text-uppercase display-4 fw-bold'>Add Img</p>
            <Form className='text-start' onSubmit={handleAddImg}>
                {/* Image link */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Cover Image (Get link from google drive <b>Must note anyone can view this link</b>)</Form.Label>
                    <input {...register("img", { required: "Image is Required" })} type="url" className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder='Image link from google drive' />
                </Form.Group>
                <input className='btn btn-primary w-100' type="submit" />
            </Form>
            <ToastContainer />
        </div>
    );
};

export default AddImg;