import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Singlebook = () => {

    //Delete must needed
    

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
        <tbody>
            {
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                        <Link className='btn btn-warning'>Delete</Link>
                    </td>
                </tr>
            }
        </tbody>
    );
};

export default Singlebook;