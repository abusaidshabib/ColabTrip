import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tickets = ({tick}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <tbody>
            {
                <tr>
                    <th scope="row">{tick.name}</th>
                    <td>{tick.email}</td>
                    <td>{tick.number}</td>
                    <td>
                        <Button variant="primary" onClick={handleShow}>
                            view
                        </Button>
                    </td>
                    <td>{tick.number}</td>
                    <td>
                        <Link className='btn btn-warning'>Delete</Link>
                    </td>
                </tr>
            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{tick.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{tick.message}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </tbody>
    );
};

export default Tickets;