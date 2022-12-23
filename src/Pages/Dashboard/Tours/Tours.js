import React, { useEffect, useState } from 'react';
import Tickets from '../Tickets/Tickets';

const Tours = () => {
    const [buses, setBuses] = useState([]);
    useEffect(() => {
        fetch('https://tripwallet-backend.vercel.app/tickets?category=bus')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBuses(data);
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
                buses.map(bus => <Tickets key={bus._id} tick={bus}></Tickets>)
            }
        </table>
    );
};

export default Tours;