import React from 'react';
import Image from 'next/image';
import styles from '../styles/Services.module.css'; 

const Services = () => {
  const services = [
    {
      title: "Root Canal Treatment",
      description: "Root canal treatment is required when the pulp of the tooth gets infected; mostly due to external decay of the tooth",
      imageUrl: "	http://www.smile-dental.in/wp-content/uploads/2022/03/rct-1.png",
      link:'/root-canal-treatment'
    },
    {
      title: "Dentures",
      description: "Dentures are custom-made removable appliances which are used as a replacement of missing teeth and tissues",
      imageUrl: "http://www.smile-dental.in/wp-content/uploads/2022/03/Dentures-1.png",
      link:'/dentures'
    },
    {
      title: "Fillings",
      description: "Dental Filling is a treatment modality administered by a dentist to restore missing tooth structure",
      imageUrl: "http://www.smile-dental.in/wp-content/uploads/2022/03/dental-filling-copy.png",
      link:'/dental-fillings'
    },
    {
      title: "Dental Braces",
      description: "Dental braces are appliances used to align or straighten the teeth. They do so by moving your teeth",
      imageUrl: "http://www.smile-dental.in/wp-content/uploads/2022/03/Dental-Braces-copy.png",
      link:'/dental-braces'
    },
    {
      title: "Dental Crowns/ Bridges",
      description: "Dental Crowns are a tooth-shaped cap which is placed on the tooth to restore the shape, size, and appearance",
      imageUrl: "http://www.smile-dental.in/wp-content/uploads/2022/03/Dental-Crowns-Bridges-copy.png",
      link:'/dental-crowns-bridges'
    },
    {
      title: "Smile Makeover",
      description: "Smile Makeover is a process administered by a dentist for improving one's smile through various cosmetic",
      imageUrl: "http://www.smile-dental.in/wp-content/uploads/2022/03/smile-copy.png",
      link:'/dental-smile-makeover'
    },
    {
      title: "Dental Implants",
      description: "Dental implants are easily the most popular and also the ideal solution for replacing your missing teeth",
      imageUrl: "http://www.smile-dental.in/wp-content/uploads/2022/03/Dental-Implants-copy.png",
      link:'/dental-implants'
    },
    {
      title: "Wisdom Teeth Removal",
      description: "There are chances that wisdom teeth may cause severe problems and it is best to get them removed",
      imageUrl: "http://www.smile-dental.in/wp-content/uploads/2022/03/Wisdom-Teeth-Removal-copy.png",
      link:'/wisdom-teeth-removal'
    },
    {
      title: "Teeth Whitening",
      description: "Teeth whitening or teeth cleaning is a process of removing stains from the teeth surface and restoring brightness",
      imageUrl: "http://www.smile-dental.in/wp-content/uploads/2022/03/Teeth-Whitening-copy.png",
      link:'/teeth-whitening'
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Our Services</h2>
      
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceBox}>
             <a href={service.link} className={styles.serviceLink}>
            <div className={styles.serviceContent}>
              <div className={styles.icon}>
                <Image src={service.imageUrl} alt={service.title} width={50} height={50} />
              </div>
              <div className={styles.serviceText}>
                <h4 className={styles.serviceTitle}>{service.title}</h4>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            </div></a>
          </div>
        ))}
      </div>
      <div className={styles.viewMoreContainer}>
        <a href="#" className={styles.viewMoreButton}>
          View More
        </a>
      </div>
    </div>
  );
}

export default Services;
