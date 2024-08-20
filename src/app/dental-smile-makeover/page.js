import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from './DentalSmileMakeover.module.css';

const BestDentalSmileMakeover = () => {
  return (
    <Layout>
      <div className={styles.container}>
        {/* First Row */}
        <div className={styles.innerContainer}>
          <div className={styles.row}>
            {/* Left Column for Text */}
            <div className={styles.textColumn}>
              <h1 className={`${styles.heading} ${styles.textCenter}`}>Best Dental Smile Makeover</h1>
              <hr className={styles.hrLine} />
              <div className={styles.textCenter}>
                <Link href="/Form" className={styles.bookButton}>
                  Book Now
                </Link>
              </div>
            </div>
            {/* Right Column for Image */}
            <div className={styles.imageContainer}>
              <Image
                src="/dental-smile.PNG"
                alt="Dental Smile Makeover"
                width={500}
                height={500}
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
                src="/smile.PNG"
                alt="Smile Makeover Icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            {/* Right Column for Text */}
            <div className={styles.textRight}>
              <h2 className={styles.subheading}>Smile Makeover</h2>
              <p className={styles.paragraph}>
                Smile Makeover is a process administered by a dentist for improving ones smile through various cosmetic or surgical procedures.
              </p>
              <p className={styles.paragraph}>
                A smile makeover takes into consideration the tooth color, tooth size, tooth shape, tooth position, lip position, lip length, gum position, and gum color.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BestDentalSmileMakeover;
