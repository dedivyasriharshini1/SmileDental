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
        <Image src="/priti.PNG" width= {300}
    height={450} alt="Dr. Priti" className={styles.image} />
        <div className={styles.details}>
          <h1 className={styles.name}>DR. PRITI</h1>
          <p className={styles.specialty}>General Dentistry</p>
          <h3 className={styles.sectionTitle}>Doctor BIO</h3>
          <p className={styles.bio}>
            Dr. Priti completed her B.D.S. from Government Dental College and Hospital, Mumbai. She has an experience of over 16 years in general dentistry. She specializes in cosmetic dentistry, restorations, dental crowns, and root canal.
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
            <li>Cosmetic dentistry</li>
            <li>Restorations</li>
            <li>Dental crowns</li>
            <li>Root canal</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
