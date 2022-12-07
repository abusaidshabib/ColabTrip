import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Gallery.css';

const Gallery = () => {

    const datas = [
        {
            "img": "https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "id": 1,
        },
        {
            "img": "https://images.unsplash.com/photo-1669391848393-c2be5c1bf124?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "id": 2,
        },
        {
            "img": "https://images.unsplash.com/photo-1669824137673-91f8f75f87fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "id": 3,
        },
        {
            "img": "https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "id": 4,
        },
        {
            "img": "https://images.unsplash.com/photo-1669732464953-33b492a5206f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
            "id": 5,
        },
        {
            "img": "https://images.unsplash.com/photo-1669847206032-c4257c96923f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "id": 6,
        },
    ]

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
                        datas.map(data => <div className='pics' key={data.id}>
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