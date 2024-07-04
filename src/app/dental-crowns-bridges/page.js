// pages/dental-crowns-bridges.js

import Image from 'next/image';
import Link from 'next/link';
import styles from './DentalCrownsBridges.module.css';
import Layout from '@/components/Layout';

export default function DentalCrownsBridges() {

  return (
    <Layout>
    <div className={styles.pageContent}>
      <div className={styles.row}>
        <div className={styles.columnHalf}>
          <div className={styles.wrapper}>
            <div className={styles.emptySpace}></div>
            <div className={styles.headingContainer}>
              <h1 className={styles.mainHeading}>Best Dental Crowns & Bridges</h1><hr/>
              <div className={styles.headingSpacer}></div>
            </div>
            <div className={styles.buttonContainer}>
              <Link href="/Form" className={styles.bookNowButton} passHref>
                Book Now
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.columnHalf}>
          <div className={styles.imageContainer}>
            <Image
              src="http://www.smile-dental.in/wp-content/uploads/2022/04/dental-crown-and-bridges.jpg"
              alt="Dental Crowns and Bridges"
              width={740}
              height={489}
              layout="responsive"
            />
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.columnFull}>
          <div className={styles.featureBox}>
            <div className={styles.featureIcon}>
              <Image
                src="http://www.smile-dental.in/wp-content/uploads/2022/03/Dental-Crowns-Bridges-copy.png"
                alt="Dental Crowns and Bridges Icon"
                width={40}
                height={40}
              />
            </div>
            <div className={styles.featureContent}>
              <h2 className={styles.subHeading}>Dental Crowns & Bridges</h2>
              <p className={styles.text}>
                Dental Crowns are a tooth-shaped cap which is placed on the tooth to restore the shape, size, and appearance of the tooth damaged due to accident, trauma or decay. They are the best alternative to the natural crown and perform all the functions of a healthy crown and even look like one.
              </p>
              <div className={styles.rightAlignedImage}>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
