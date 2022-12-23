import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import miz from '../../assets/Md. Mizanur Rahman.jpeg';
import zak from '../../assets/Zakaria Hossain.jpeg';
import naz from '../../assets/Nazmun Nahar.jpeg';
import az from '../../assets/Aziz Faisal Nayem.jpeg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <div className='text-white cardSize d-flex justify-content-center align-items-center' style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1669542873056-bea5d94ea6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: 'auto',
            }}>
                <div>
                    <h5 className='text-uppercase display-4 fw-bold'>About Us</h5>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className="p-5">
                    <p className='fs-6'>We feel both pleased and honored to introduce ourselves as one of the growing travel companies in Bangladesh. We at Trip Wallet would like to offer you every kind of service here in Bangladesh and abroad. Our team of professionals, with a tremendous wealth of experience in the travel trade, is capable of fulfilling every client needs while traveling with us. Travel Wallet Solutions is a Tour Operator serving the tourism industries. We are one of the growing Tour Operators of Bangladesh, we operate from Dhaka and we know our country as you know the palm of your hand. Our main goal has been always complete client satisfaction. We only use high quality products & services that we have been able to acquire through this of our operations. IF you want a lifetime experience of your visit to Bangladesh or abroad your choice is Trip Wallet, where everything is supervised by the owners, so we can assure you only the highest quality.</p>
                </div>
            </div>

            <Container className="text-start">
                <Row className="gap-5">
                    <Col>
                        <h3>VISION</h3>
                        <p>To lead the operation of touristic services in Bangladesh through the constant improvement, customer satisfaction and innovation. To be accompanied highly rentable with an outstanding excellence and with exemplary relations with the community, the environment and the social responsibility.</p>
                    </Col>
                    <Col>
                        <h3>MISSION</h3>
                        <p>A firm commitment to customer satisfaction. We seek to always provide professional solutions and add value in all our services to exceed our client’s expectations and to achieve our partner’s goals. We want to create value and to make a difference. That is why we support the sustainable and responsible tourism. </p>
                    </Col>
                </Row>
                <Row className="gap-5">
                    <Col>
                        <h3>STRATEGIC OBJECTIVE</h3>
                        <p>To recognize that a good service is more than a competitive price; it's a near-obsessive attention to detail that transforms a good experience into an exceptional one. We don't want to sell you a travel package; we want to understand your needs, so we can custom design a travel solution that meets your specific requirements. We look at your opportunities and challenges and design a solution customized to fit you.
                        </p>
                    </Col>
                    <Col>
                        <h3>VALUES</h3>
                        <p>The core values of Trip Wallet are customer service, loyalty  a n d integrity, communication, innovation, quality, teamwork and responsibility. We offer the same level of service to all of our clients. We comply the strict principles of professional conduct and ethics. Our team of professionals not only arranges the travel solutions, they take a proactive approach to solve problems by making the right decisions.</p>
                    </Col>
                </Row>
                <Row className="gap-5">
                    <Col>
                        <h3>Costumer service</h3>
                        <p>We have the commitment and the passion to satisfy our client’s needs and we manage to accomplish it.</p>
                    </Col>
                    <Col>
                        <h3>Loyalty and integrity</h3>
                        <p>Our standards are high and they are reflected in all our operations.
                        </p>
                    </Col>
                </Row>
                <Row className="gap-5">
                    <Col>
                        <h3>Communication</h3>
                        <p>We make emphasis on communication (external and internal) so our representatives can fully understand the client’s needs. This principle makes us serve our clients as they deserve.
                        </p>
                    </Col>
                    <Col>
                        <h3>Innovation</h3>
                        <p>We are committed to bring solutions and to always be a step ahead. The innovation allows finding greater benefits of the things that already exist.

                        </p>
                    </Col>
                </Row>
                <Row className="gap-5">
                    <Col>
                        <h3>Quality</h3>
                        <p>In all we do. Our true quality commitment allows us to make promises become facts, creating tangible results and benefits.
                        </p>
                    </Col>
                    <Col>
                        <h3>Teamwork</h3>
                        <p>The Success is the result of working together to satisfy our client’s needs. Trust, mutual respect and enthusiasm are the angular stones of our team work.

                        </p>
                    </Col>
                </Row>
                <Row className="gap-5">
                    <Col>
                        <h3>Responsibility</h3>
                        <p>We are concerned in doing the right thing.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>OUR SERVICES</h3>
                        <ul className='ist-group list-group-flush'>
                            <li>Individual Tour Package</li>
                            <li>Group Tour Package</li>
                            <li>Corporate Group Tour Package</li>
                            <li>Study Tour Package</li>
                            <li>Domestic Tour Package</li>
                            <li>International Tour Package.</li>
                            <li>Honeymoon Package</li>
                            <li>Customized tour Package</li>
                            <li>Hotel/Resort/Cottage Booking</li>
                            <li>All Kind of Ticket Booking</li>
                            <li>Visa Service</li>
                            <li>Transportation Service</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div class="container px-4 text-center">
                <h3 className='fw-bold display-5 py-5'>Leadership Team</h3>
                <div class="row gx-5">
                    <div class="col">
                        <img src={miz} className="imgSize rounded-circle" alt="" />
                        <br />
                        <p>Md. Mizanur Rahman</p>
                    </div>
                    <div class="col">
                        <img src={zak} className="imgSize rounded-circle" alt="" />
                        <br />
                        <p>Zakaria Hossain</p>
                    </div>
                    <div class="col">
                        <img src={naz} className="imgSize rounded-circle" alt="" />
                        <br />
                        <p>Nazmun Nahar</p>
                    </div>
                    <div class="col">
                        <img src={az} className="imgSize rounded-circle" alt="" />
                        <br />
                        <p>Aziz Faisal Nayem</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;