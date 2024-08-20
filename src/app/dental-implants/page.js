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
          <title>Best Dental Implants</title>
          <meta name="description" content="Get the best dental implants services." />
        </Head>

        {/* First Row */}
        <div className={styles.innerContainer}>
          <div className={styles.row}>
            {/* Left Column for Text */}
            <div className={styles.textColumn}>
              <h1 className={`${styles.heading} ${styles.textCenter}`}>Best Dental Implants</h1>
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
                src="/dental-implants.PNG"
                alt="Dental Implants"
                width={740}
                height={740}
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
                src="/di.PNG"
                alt="Dental Implants"
                width={360}
                height={180}
                className={styles.shadowLg}
              />
            </div>
            {/* Right Column for Text */}
            <div className={styles.textRight}>
              <h2 className={styles.subheading}>Dental Implants</h2>
              <p className={styles.paragraph}>
                Dental implants are easily the most popular and also the ideal solution, for replacing your missing tooth/teeth. They have definitely changed the course of dentistry in the last quarter of a century or so.
              </p>
              <p className={styles.paragraph}>
                A dental implant is basically a titanium post which is surgically inserted into the jawbone beneath the gum line to work as a tooth root. Post insertion, an implantologist will attach a crown on top of the implant to ensure the appearance of a natural tooth. Dental implants not only look and feel like your natural teeth but also function like them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
