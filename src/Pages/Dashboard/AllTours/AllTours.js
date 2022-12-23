import React, { useEffect, useState } from 'react';

const AllTours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('https://tripwallet-backend.vercel.app/tours')
            .then(res => res.json())
            .then(data => {
                setTours(data);
            }, [])
    })

    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete this review')
        if (proceed) {
            fetch(`https://tripwallet-backend.vercel.app/tours/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    tours.map(tour => <tr key={tour._id}>
                        <td>{tour.title}</td>
                        <td>
                            <button onClick={() => handleDelete(tour._id)} className='btn btn-warning'>Delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    );
};

export default AllTours;