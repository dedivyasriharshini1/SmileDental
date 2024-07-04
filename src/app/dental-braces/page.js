// pages/dental-braces.js

import Image from 'next/image';
import Link from 'next/link';
import styles from './DentalBraces.module.css';
import Layout from '@/components/Layout';

export default function DentalBraces() {
  return (
    <Layout>
    <div className={styles.pageContainer}>
      <div className={styles.row}>
        <div className={styles.column}>
          <h1 className={styles.heading}>Best Dental Braces</h1><hr/>
          <div className={styles.buttonContainer}>
            <Link href="/Form" className={styles.button} passHref>
              Book Now
            </Link>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.imageContainer}>
            <Image
              src="http://www.smile-dental.in/wp-content/uploads/2022/04/1denta-lbraces.png"
              alt="Dental Braces"
              width={683}
              height={429}
              layout="responsive"
            />
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.fullColumn}>
          <div className={styles.featureBox}>
            <div className={styles.featureIcon}>
              <Image
                src="http://www.smile-dental.in/wp-content/uploads/2022/03/Dental-Braces-copy.png"
                alt="Dental Braces Icon"
                width={40}
                height={40}
              />
            </div>
            <div className={styles.featureContent}>
              <h2 className={styles.subHeading}>Dental Braces</h2>
              <p className={styles.text}>
                Dental braces are appliances used to align or straighten the teeth.
                They do so by moving your teeth in the desired position.
              </p>
              <p className={styles.text}>
                Being made of wires, brackets, and bands, they create the right push.
                Apart from perfectly aligning the teeth, braces aid to correct the jaw
                positioning, improve speech &amp; biting disorders, and are a major
                contributor in aesthetically enhancing your smile.
              </p>
              <p className={styles.text}>
                The treatment options and modalities can only be known after a dental visit.
              </p>
              <div className={styles.imageContainer}>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
