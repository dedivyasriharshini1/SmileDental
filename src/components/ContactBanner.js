// components/ContactBanner.js
import Link from 'next/link';
import styles from '../styles/ContactBanner.module.css';

const ContactBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={`${styles.bannerItem} ${styles.implantCenter}`}>
        <div className={styles.icon}>❤️</div>
        <span>Implant Center</span>
      </div>
      <div className={`${styles.bannerItem} ${styles.bookAppointment}`}>
        <Link href="/Form">BOOK APPOINTMENT</Link>
        <div className={styles.arrow}>➡️</div>
      </div>
      <div className={`${styles.bannerItem} ${styles.openingHours}`}>
        <span>OPENING HOURS</span>
        <div className={styles.arrow}>➡️</div>
        <div className={styles.hoursInfo}>
          <p>Mon-Sat Morning: 10:00 am to 2:00 pm</p>
          <p>Mon-Sat Evening: 5:00 pm to 9:00 pm</p>
          <p>Sunday Closed</p>
        </div>
      </div>
      <div className={`${styles.bannerItem} ${styles.emergencyCase}`}>
        <div className={styles.phoneIcon}>📞</div>
        <div>
          <span>Emergency case</span>
          <span className={styles.phoneNumber}>(800)123-4567</span>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
