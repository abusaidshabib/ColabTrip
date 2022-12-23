import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Booked = () => {

    const [books, setBook] = useState([]);

    useEffect(() => {
        fetch('https://tripwallet-backend.vercel.app/booking')
            .then(res => res.json())
            .then(data => {
                setBook(data);
            }, [])
    })

    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete this review')
        if (proceed) {
            fetch(`https://tripwallet-backend.vercel.app/booking/${id}`, {
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
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Title</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    books.map(book => <tr key={book._id}>
                        <th scope="row">{book.name}</th>
                        <td>{book.email}</td>
                        <td>{book.number}</td>
                        <td>{book.title}</td>
                        <td>
                            <button onClick={()=>handleDelete(book._id)} className='btn btn-warning'>Delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    );
};

export default Booked;