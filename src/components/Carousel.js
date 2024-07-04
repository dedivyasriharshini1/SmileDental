// components/Carousel.js
'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const CustomCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} interval={5000}  showThumbs={false}>
        <div className="carousel-item">
          <Image
            src="	http://www.smile-dental.in/wp-content/uploads/2022/03/slider-1-copy.jpg" 
            alt="First Slide"
            layout="responsive"
            width={1920}
            height={500}
          />
          <button className="carousel-button" onClick={() => alert('Image 1 Button Clicked')}>Click Here</button>
        </div>
        <div className="carousel-item">
          <Image
            src="http://www.smile-dental.in/wp-content/uploads/2022/03/slider-2-copy.jpg" 
            alt="Second Slide"
            layout="responsive"
            width={1920}
            height={500}
          />
          <button className="carousel-button1" onClick={() => alert('Image 2 Button Clicked')}>Click Here</button>
        </div>
      </Carousel>

      <style jsx>{`
        .carousel-container {
          max-width: 100%;
          margin: 0 auto;
          over-flow:hidden;
         
        }

        .carousel-item {
          position: relative;
        }

         .carousel-button {
          position: absolute;
          width:120px;
          left: 50px; 
          bottom:50px;
          right:5px;
          background-color: blue; 
          color: white; 
          border: none;
          cursor: pointer;
          font-size: 16px;
          border-radius: 20px; 
          transition: background-color 0.3s; 
          padding:20px;
        }
        .carousel-button1{
          position: absolute;
          margin:20px;
          width:120px;
          left: 100px; 
          bottom:50px;
          right:5px;
          background-color: blue; 
          color: white; 
          border: none;
          cursor: pointer;
          font-size: 16px;
          border-radius: 20px; 
          transition: background-color 0.3s; 
          padding:20px;
        
        
        }
      
          .carousel-item {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }

       

       
      `}</style>
    </div>
  );
};

export default CustomCarousel;
