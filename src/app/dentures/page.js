// pages/Dentures.js
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from './Home.module.css'; // Ensure correct path and module import

const Dentures = () => {
  return (
    <Layout>
      <div className={styles.container}>
        {/* Container */}
        <div className={styles.innerContainer}>
          {/* Row */}
          <div className={styles.row}>
            {/* Column for Text */}
            <div className={styles.textColumn}>
              <h1 className={`${styles.heading} ${styles.textCenter}`}>Best Dentures Treatment</h1>
              <hr className={styles.hrLine} />
              <div className={styles.textCenter}>
                <Link href="/Form" className={styles.bookButton}>
                  
                    Book Now
                  
                </Link>
              </div>
            </div>
            {/* Column for Image */}
            <div className={styles.imageContainer}>
              <Image 
                src="http://www.smile-dental.in/wp-content/uploads/2022/04/1dentures.jpg"
                alt="Dentures"
                width={740}
                height={493}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        {/* Full-width Section */}
        <div className={styles.fullWidthSection}>
          <div className={styles.fullWidthContent}>
            {/* Image on the Left */}
            <div className={styles.imageLeft}>
              <Image
                src="http://www.smile-dental.in/wp-content/uploads/2022/03/Dentures-1.png"
                alt="Dentures"
                width={360}
                height={180}
                className={styles.shadowLg} // Ensure the class name is properly referenced
              />
            </div>
            {/* Text on the Right */}
            <div className={styles.textRight}>
              <h2 className={styles.subheading}>Dentures</h2>
              <p className={styles.paragraph}>
                Dentures are custom-made removable appliances which are used as a replacement for missing teeth and tissues.
              </p>
              <p className={styles.paragraph}>
                They are the artificial teeth which enable normal functioning of the human mouth. Dentures are of two types – Complete &amp; Partial.
                Complete dentures are advised when all the teeth are missing, partial dentures on the other hand are opted when some natural teeth are missing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dentures;
