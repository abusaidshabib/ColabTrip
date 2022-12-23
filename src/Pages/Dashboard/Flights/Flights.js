import React, { useEffect, useState } from 'react';
import Tickets from '../Tickets/Tickets';

const Flights = () => {
    const [airs, setAir] = useState([]);
    useEffect(() => {
        fetch('https://tripwallet-backend.vercel.app/tickets?category=air')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAir(data);
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
                airs.map(air => <Tickets key={air._id} tick={air}></Tickets>)
            }
        </table>
    );
};

export default Flights;