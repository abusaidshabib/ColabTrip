import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Gallery.css';

const Gallery = () => {
    const [img, setImg] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => {
                setImg(data);
            }, [])
    })


    return (
        <PhotoProvider
            speed={() => 800}
            easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
            <Card className='text-white cardSize d-flex justify-content-center align-items-center' style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1669542873056-bea5d94ea6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: 'auto',
            }}>
                <div>
                    <h5 className='text-uppercase display-4 fw-bold'>Gallery</h5>
                    <p className='fs-4'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </Card>
            <Container className='py-5'>
                <div className='gallery'>
                    {
                       img.map(data => <div className='pics' key={data._id}>
                            <PhotoView src={data.img}>
                                <img src={data.img} alt="" style={{ width: '100%' }} />
                            </PhotoView>
                        </div>)
                    }
                </div>
            </Container>
        </PhotoProvider>
    );
};

export default Gallery;