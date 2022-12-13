import React, { useContext } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext/UserContext';

const Addreview = () => {
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const name = user?.displayName;
        const email = user?.email;
        const imgUrl = user?.photoURL;

        const sendreview = {
            review, name, email, imgUrl
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sendreview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Review Send Successfully");
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <Form onSubmit={handleReview} className="w-50 mx-auto text-start mb-5">
            <p className='text-uppercase display-4 fw-bold'>Please Enter your review</p>
            <textarea name="review" rows="3" cols="75" className='form-control ' style={{ height: '100px' }} placeholder='Enter your review here'></textarea>
            <input type="submit" value="Send your review" className='btn btn-primary mt-3' />
        </Form>
    );
};

export default Addreview;