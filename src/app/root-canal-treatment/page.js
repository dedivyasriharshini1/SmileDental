// pages/DentalFillings.js
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from './Home.module.css'; // Import the CSS module

const RootCanal = () => {
  return (
    <Layout>
      <div className={styles.container}>
       
        <div className={styles.innerContainer}>
          <div className={styles.row}>
         
            <div className={styles.textColumn}>
              <h1 className={`${styles.heading} ${styles.textCenter}`}>ROOT CANAL TREATMENT</h1>
              <hr className={styles.hrLine} />
              <div className={styles.textCenter}>
                <Link href="/Form" className={styles.bookButton}>
                  Book Now
                </Link>
              </div>
            </div>
           
            <div className={styles.imageContainer}>
              <Image
                src="http://www.smile-dental.in/wp-content/uploads/2022/03/root-canel.jpg"
                alt="Root Canal"
                width={740}
                height={493}
                className={`${styles.shadowLg} rounded-lg object-cover`}
              />
            </div>
          </div>
        </div>

       
        <div className={styles.fullWidthSection}>
          <div className={styles.fullWidthContent}>
          
            <div className={styles.imageLeft}>
              <Image
                src="http://www.smile-dental.in/wp-content/uploads/2022/03/rct-1.png"
                alt="Dental Filling Icon"
                width={360}
                height={180}
                className={styles.shadowLg}
              />
            </div>
          
            <div className={styles.textRight}>
              <h2 className={styles.subheading}>RCT</h2>
              <p className={styles.paragraph}>
              The outer portion or Crown of a tooth is a three-layered structure namely – Enamel, Dentin & Pulp
              </p>
              <p className={styles.paragraph}>
              If the tooth decay is limited to the first two layers, it can be corrected with Filling/ Restoration. In case the tooth decay reaches the third layer and causes inflammation or infection of pulp, an RCT or Endodontic Treatment is needed. A dentist at the nearest dental clinic should be consulted at the earliest in such cases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RootCanal;
