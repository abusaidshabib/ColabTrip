import React from 'react';
import Singlebook from './Singlebook';

const Booked = () => {
    return (
        <table class="table table-hover">
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
                <Singlebook></Singlebook>
        </table>
    );
};

export default Booked;