import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Tickets = ({ tick }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete this review')
        if (proceed) {
            fetch(`http://localhost:5000/tickets/${tick._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }

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
                        <button onClick={handleDelete} className='btn btn-warning'>Delete</button>
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