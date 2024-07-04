// pages/DentalFillings.js
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from './Home.module.css'; // Import the CSS module

const DentalFillings = () => {
  return (
    <Layout>
      <div className={styles.container}>
       
        <div className={styles.innerContainer}>
          <div className={styles.row}>
         
            <div className={styles.textColumn}>
              <h1 className={`${styles.heading} ${styles.textCenter}`}>Best Dental Fillings</h1>
              <hr className={styles.hrLine} />
              <div className={styles.textCenter}>
                <Link href="/Form" className={styles.bookButton}>
                  Book Now
                </Link>
              </div>
            </div>
           
            <div className={styles.imageContainer}>
              <Image
                src="http://www.smile-dental.in/wp-content/uploads/2022/04/fillings.jpg"
                alt="Dental Fillings"
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
                src="http://www.smile-dental.in/wp-content/uploads/2022/03/dental-filling-copy.png"
                alt="Dental Filling Icon"
                width={360}
                height={180}
                className={styles.shadowLg}
              />
            </div>
          
            <div className={styles.textRight}>
              <h2 className={styles.subheading}>Dental Fillings</h2>
              <p className={styles.paragraph}>
                Dental Filling is a treatment modality administered by a dentist to restore missing tooth structure which could have been a result of decay or trauma.
              </p>
              <p className={styles.paragraph}>
                Decay makes the tooth hollow. Dental Filling helps in filling this gap and protects it from further decay. A filling is also used to repair broken or cracked teeth and the teeth which wear off due to dental habits like teeth grinding, nail biting etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DentalFillings;
