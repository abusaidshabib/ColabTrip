import React from 'react';
import { Link } from 'react-router-dom';

const Singlebook = () => {

    //Delete must needed

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