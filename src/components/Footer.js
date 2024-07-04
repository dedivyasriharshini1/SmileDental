import React from 'react';
import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => (
  <div className={styles.footerWrapper}>
    <div className={styles.footerMain}>
      <div className={styles.container}>
        <div className={styles.row}>
         
          <div className={styles.col}>
            <aside className={styles.widget}>
              <h3 className={styles.widgetTitle}>Quick Links</h3>
              <ul className={styles.menu}>
                <li className={styles.menuItem}><a href="/root-canal-treatment">Root Canal Treatment</a></li>
                <li className={styles.menuItem}><a href="/dentures">Dentures</a></li>
                <li className={styles.menuItem}><a href="/dental-fillings">Dental Fillings</a></li>
                <li className={styles.menuItem}><a href="/dental-braces">Dental Braces</a></li>
                <li className={styles.menuItem}><a href="/dental-crowns-bridges">Dental Crowns & Bridges</a></li>
                <li className={styles.menuItem}><a href="/smile-makeover">Dental Smile Makeover</a></li>
                <li className={styles.menuItem}><a href="/teeth-whitening">Teeth Whitening</a></li>
                <li className={styles.menuItem}><a href="/wisdom-teeth-removal">Wisdom Tooth Removal</a></li>
                <li className={styles.menuItem}><a href="/dental-implants">Dental Implants</a></li>
              </ul>
            </aside>
          </div>

          
          <div className={styles.col}>
            <aside className={styles.widget}>
              <h3 className={styles.widgetTitle}>Kompally</h3>
              <div className={styles.textwidget}>
                <p>Pipeline road, opposite to Konark hospital,<br />
                  Jeedimetla, Hyderabad, <br />
                  Telangana 500055<br />
                  Call us: 040 40182236
                </p>
                <iframe 
                  className={styles.map} 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5823489148274!2d78.43493467420274!3d17.49454180629259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9931cfbe1cfd%3A0x15fbce8df40863b!2sPipeline%20Rd%2C%20Jeedimetla%2C%20Hyderabad%2C%20Telangana%20500055%2C%20India!5e0!3m2!1sen!2sus!4v1595821223033!5m2!1sen!2sus" 
                  width="250" 
                  height="200" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  aria-hidden="false" 
                  tabIndex="0">
                </iframe>
              </div>
            </aside>
          </div>

          
          <div className={styles.col}>
            <aside className={styles.widget}>
              <h3 className={styles.widgetTitle}>Banjara Hills</h3>
              <div className={styles.textwidget}>
                <p>Flat no. 201, Navata castle,<br />
                  Venkat Ramana Colony, Anand nagar,<br />
                  Banjara hills – Telangana- 500004<br />
                  Call us: 040 23310225
                </p>
                <iframe 
                  className={styles.map} 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.503028953333!2d78.44890457420286!3d17.497540306247222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb977ef357e7fb%3A0x7d76058d1747e727!2sAnand%20Nagar%2C%20Banjara%20Hills%2C%20Hyderabad%2C%20Telangana%20500034%2C%20India!5e0!3m2!1sen!2sus!4v1595821311032!5m2!1sen!2sus" 
                  width="250" 
                  height="200" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  aria-hidden="false" 
                  tabIndex="0">
                </iframe>
              </div>
            </aside>
          </div>

          
          <div className={styles.col}>
            <aside className={styles.widget}>
              <h3 className={styles.widgetTitle}>Opening Hours</h3>
              <div className={styles.textwidget}>
                <p>Book Appointment: 9989345839, 9618060569<br />
                  Mon-Sat Morning Hours: 10:00 am to 2:00 pm<br />
                  Mon-Sat Evening Hours: 5:00 pm to 9:00 pm<br />
                  Sunday: Closed
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <div className={styles.container}>
        <div className={styles.footerCenter}>
          © Copyright 2022 Smile-Dental. All Rights Reserved.
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
