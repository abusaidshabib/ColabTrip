import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HeroSection.css';

const HeroSection = () => {

  const heroDatas = [
    {
      "img": "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "title": "First Title",
      "paragraph": "First Paragraph",
      "index": 1

    },
    {
      "img": "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      "title": "second Title",
      "paragraph": "second Paragraph",
      "index": 2

    },
    {
      "img": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "title": "third Title",
      "paragraph": "third Paragraph",
      "index": 3

    }
  ]


  return (
    <Carousel fade>
      {
        heroDatas.map(herodata => <Carousel.Item key={herodata.index}>
          <img
            className="d-block w-100 img-fluid imgSize" style={{height: '80vh'}}
            src={herodata.img}
            alt="First slide"
          />
          <Carousel.Caption className='bgColor rounded'>
            <h3 className='text-uppercase display-4 fw-bold'>{herodata.title}</h3>
            <p className='fs-4'>{herodata.paragraph}</p>
          </Carousel.Caption>
        </Carousel.Item>)
      }
    </Carousel>
  );
};

export default HeroSection;