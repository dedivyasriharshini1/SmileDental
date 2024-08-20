// pages/index.js

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from './Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Best Wisdom Tooth Removal</title>
          <meta name="description" content="Get the best wisdom tooth removal services." />
        </Head>

        {/* First Row */}
        <div className={styles.innerContainer}>
          <div className={styles.row}>
            {/* Left Column for Text */}
            <div className={styles.textColumn}>
              <h1 className={`${styles.heading} ${styles.textCenter}`}>Best Wisdom Tooth Removal</h1>
              <hr className={styles.hrLine} />
              <div className={styles.textCenter}>
                <Link href="/Form"  className={styles.bookButton} passHref>
                
                    Book Now
                  
                  
                </Link>
              </div>
            </div>
            {/* Right Column for Image */}
            <div className={styles.imageContainer}>
              <Image
                src="/wisdom-tooth.PNG"
                alt="Wisdom Teeth"
                width={612}
                height={382}
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
                src="/wtr.PNG"
                alt="Wisdom Teeth Removal"
                width={360}
                height={180}
                className={styles.shadowLg}
              />
            </div>
            {/* Right Column for Text */}
            <div className={styles.textRight}>
              <h2 className={styles.subheading}>Wisdom Tooth Removal</h2>
              <p className={styles.paragraph}>
                Wisdom teeth, often known as third molars, are the last teeth to erupt. As per dentists worldwide, one usually gets them in late teens or early twenties. However, even instances of eruption in late adulthood are common.
              </p>
              <p className={styles.paragraph}>
                If they erupt smoothly and without any interruption, then they can be proved as an asset. But the problem with third molars is that if they do not erupt properly or are misaligned, they would need to be extracted. If they are poorly aligned, they can damage the adjacent tooth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
