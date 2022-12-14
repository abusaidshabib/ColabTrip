import React from 'react';
import { Container } from 'react-bootstrap';

const Achivements = () => {
    return (
        <Container className='py-5'>
            <p className='text-uppercase display-4 fw-bold'>OUR achievement</p>
            <div className="row align-items-center py-5">
                <div className="col">
                    <div className="card text-bg-primary mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title fs-1 fw-bold">2000+ Guest Served</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-bg-warning mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title fs-1 fw-bold fs-md-3">100+ Company served</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="col">
                        <div className="card text-bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title fs-1 fw-bold">1000+ Happy travelers</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Achivements;