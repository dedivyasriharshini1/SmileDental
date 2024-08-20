'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './DoctorProfile.module.css';
 // Assuming the image is in the public directory

const DoctorProfile = () => {
  const [showTimetable, setShowTimetable] = useState(false);

  const handleToggleTimetable = () => {
    setShowTimetable(!showTimetable);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <Image src="/sreedhar.PNG" width= {300}
    height= {450} alt="Dr.Sreedhar" className={styles.image} />
        <div className={styles.details}>
          <h1 className={styles.name}>DR. SREEDHAR REDDY</h1>
          <p className={styles.specialty}>MDS</p>
          <h3 className={styles.sectionTitle}>Doctor BIO</h3>
          <p className={styles.bio}>
          Dr . Sreedhar Reddy is specialized in periodontics . He has 16 years of clinical experience
          </p>
          <button className={styles.timetableButton} onClick={handleToggleTimetable}>
            {showTimetable ? 'Hide Timetable' : 'Doctor Timetable'}
          </button>
          {showTimetable && (
            <div className={styles.timetable}>
              <h3 className={styles.sectionTitle}>Timetable</h3>
              <ul className={styles.timetableList}>
                <li>Monday: 10 AM - 2 PM</li>
                <li>Tuesday: 10 AM - 2 PM</li>
                <li>Wednesday: 2 PM - 6 PM</li>
                <li>Thursday: 10 AM - 2 PM</li>
                <li>Friday: 2 PM - 6 PM</li>
              </ul>
            </div>
          )}
          <h3 className={styles.sectionTitle}>Procedures</h3>
          <ul className={styles.procedures}>
            <li>Gum surgery</li>
            <li>Laser surgery</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
