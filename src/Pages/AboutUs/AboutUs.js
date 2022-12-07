import React from 'react';
import { Card } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div>
            <Card className='text-white cardSize d-flex justify-content-center align-items-center' style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1669542873056-bea5d94ea6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: 'auto',
            }}>
                <div>
                    <h5 className='text-uppercase display-4 fw-bold'>About Us</h5>
                    <p className='fs-4'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </Card>
            <Card className='d-flex justify-content-center align-items-center'>
                <div>
                    <h5 className='text-uppercase display-6 fw-bold'>What we do?</h5>
                    <p className='fs-4'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </Card>

        </div>
    );
};

export default AboutUs;