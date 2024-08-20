// components/Doctors.js

'use client'; // Ensures the component is rendered only on the client-side.

import Link from 'next/link';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const doctors = [
  { profilePath :"/vishalProfile" ,  src: "/vishal.PNG", alt: "K. Vishal Singh", name: "K. Vishal Singh", specialization: "Dental" },
  { profilePath :"/pritiProfile" ,  src: "/priti.PNG", alt: "Dr. PRITI", name: "Dr. PRITI", specialization: "Dental" },
  { profilePath :"/dineshProfile" ,  src: "/dinesh.PNG", alt: "Dr. Dinesh Singh Chauhan", name: "Dr.Dinesh Singh", specialization: "Dental" },
  { profilePath :"/prashanthProfile" ,  src: "/prashanth.PNG", alt: "Dr. Prashanth Kumar", name: "Dr. Prashanth Kumar", specialization: "Dental" },
  { profilePath :"/sreedharProfile" , src: "/sreedhar.PNG", alt: "Dr.Sreedhar", name: "Dr. Sreedhar Reddy ", specialization: "Dental" }, 
];

const DoctorsCarousel = () => {
  
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="carousel-container">
      <h2 className="heading">Doctors</h2>
      <p >Our Specialists</p>
      <Carousel 
        responsive={responsive}
        showDots={false} // Shows dots below the carousel for navigation
        infinite={true} // Allows infinite looping of slides
        autoPlay={false} // Set to true if you want auto-play
        keyBoardControl={true} // Enable keyboard control
        customTransition="all 1s" // Smooth transition
        containerClass="carousel-container-class" // Custom class for container
        itemClass="carousel-item-class" // Custom class for each item
      >
        {doctors.map((doctor, index) => (
          <Link key={index} href={doctor.profilePath}>
          <div key={index} className="carousel-item">
            <div className="doctor-container">
            <Image
              src={doctor.src}
              alt={doctor.alt}
              layout="responsive"
              width={200}
              height={150}
              className="doctor-image"
            />
           
              <h3>{doctor.specialization}</h3>
              <p className="para">{doctor.name}</p>
              
              </div>
          </div>
          </Link>
        ))}
      </Carousel>

      <style jsx>{`
        .carousel-container {
          max-width: 100%;
          margin: 0 auto;
          text-align: center;
        }
         .para{
         text-align:left;
         }
        .doctor-container{
           background-color:white;
           height:500px;
        }
        h2 {
          font-size: 2em;
          margin-bottom: 0.2em;
          text-align:left;
          padding-left:60px;
        }

        p {
          font-size: 1.2em;
          margin-bottom: 1em;
          color: gray;
          text-align:left;
          padding-left:60px;
        }

        .carousel-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          
         
        }

        .doctor-image {
          
          overflow: hidden;
        }

        .doctor-info {
          margin-top: 15px;
          text-align: center;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 10px;
          width: 100%;
        }

        .doctor-info h3 {
          margin: 0;
          font-size: 1.2em;
          color: gray;
        }

        .doctor-info p {
          margin: 5px 0 0;
          font-size: 1em;
          font-weight: bold;
        }

    
      `}</style>
    </div>
  );
};

export default DoctorsCarousel;
