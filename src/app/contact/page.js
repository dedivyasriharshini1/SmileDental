// pages/contact.js
import { AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'; 
import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import styles from './contact.module.css'; 

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact - Smile Dental Clinic</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1>Contact</h1>
            <p>Send us a message or call us for more information</p>
          </div>
          <div className={styles.headerRight}>
            <div className="breadcrumbs-wrap">
              <span className="yoast-breadcrumbs">
                <a className={styles.breadcrumb_last} href="/">Home</a> » <span className={styles.breadcrumb_last} aria-current="page">Contact</span>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.locations}>
          <div className={styles.locationLeft}>
          <AiOutlineEnvironment className={styles.icon} />
            <span className={styles.heading}>Banjara Hills</span>
            <p className={styles.heading}>
              Flat no. 201, Navata castle,<br />
              Venkat Ramana Colony, Anand nagar,<br />
              Banjara hills – Telangana- 500004
            </p>
            <div className={styles.map}>
              <iframe
                className={styles.mapIframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60911.6171269011!2d78.42001607910159!3d17.412936000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9747b5b7d579%3A0x125f4f63c8e77427!2sSmile%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1651650767605!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className={styles.locationRight}>
          <AiOutlineEnvironment className={styles.icon} />
            <span className={styles.heading}>Kompally</span>
            <p className={styles.heading}>
              Pipeline road, opposite to Konark hospital,<br />
              Jeedimetla, Hyderabad, Telangana 500055
            </p>
            <div className={styles.map}>
              <iframe
                className={styles.mapIframe}
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60884.715113567945!2d78.4703837706874!3d17.493440381765605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1650641045110!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
<hr/>
        <div className={styles.contactDetails}>
          <div className={styles.contactLeft}>
           
            <div className={styles.infoBlock}>
            <AiOutlineMail className={styles.icon} />
              <span className={styles.heading}>Email</span>
              <p>info@smile-dental.com</p>
              <p>enquiries@smile-dental.com</p>
            </div>
            <div className={styles.infoBlock}>
            <AiOutlinePhone className={styles.icon} />
              <span className={styles.heading}>Phone</span>
              <p>040 23310225</p>
              <p>040 40182236</p>
            </div>
          </div>
          <div className={styles.contactRight}>
            <h3 classname={styles.h4}>Send a Message to Us</h3><br/>
            <form>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" className={styles.inputField} />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" className={styles.inputField} />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Message" className={styles.textareaField}></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className={styles.submitButton}>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
