import React, { useEffect, useState } from 'react';
import Tickets from '../Tickets/Tickets';

const Hotels = () => {
    const [ships, setShip] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tickets?category=ship')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setShip(data);
            }, [])
    })
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Message</th>
                    <th scope='col'>Date</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            {
                ships.map(ship => <Tickets key={ship._id} tick={ship}></Tickets>)
            }
        </table>
    );
};

export default Hotels;