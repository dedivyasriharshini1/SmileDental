// pages/TeethWhitening.js
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from './Home.module.css';

const TeethWhitening = () => {
  return (
    <Layout>
      <div className={styles.container}>
        {/* First Row */}
        <div className={styles.innerContainer}>
          <div className={styles.row}>
            {/* Left Column for Text */}
            <div className={styles.textColumn}>
              <h1 className={`${styles.heading} ${styles.textCenter}`}>Best Teeth Whitening</h1>
              <hr className={styles.hrLine} />
              <div className={styles.textCenter}>
                <Link href="/Form" className={styles.bookButton} passHref>
                  
                    Book Now
                
                </Link>
              </div>
            </div>
            {/* Right Column for Image */}
            <div className={styles.imageContainer}>
              <Image
                src="/teeth-whitening.PNG"
                alt="Teeth Whitening"
                width={740}
                height={493}
                className={`${styles.shadowLg} rounded-lg object-cover`}
              />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className={styles.fullWidthSection}>
          <div className={styles.fullWidthContent}>
            {/* Left Column for Image */}
            <div className={styles.imageLeft}>
              <Image
                src="/tw.PNG"
                alt="Teeth Whitening Icon"
                width={360}
                height={180}
                className={styles.shadowLg}
              />
            </div>
            {/* Right Column for Text */}
            <div className={styles.textRight}>
              <h2 className={styles.subheading}>Teeth Whitening</h2>
              <p className={styles.paragraph}>
                Teeth whitening or teeth cleaning is a process of removing stains from the tooth surface and restoring the natural color of the teeth. Whitening is a one-time procedure performed by a dentist.
              </p>
              <p className={styles.paragraph}>
                It is among the most common and widely adopted cosmetic procedures. With the advent of the latest dental technology, we have advanced whitening treatment procedures that give reliable and long-lasting results. For better results, get it done from a trained dental professional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeethWhitening;
