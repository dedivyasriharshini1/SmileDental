'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './DoctorProfile.module.css';


const DoctorProfile = () => {
  const [showTimetable, setShowTimetable] = useState(false);

  const handleToggleTimetable = () => {
    setShowTimetable(!showTimetable);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <Image src="/dinesh.PNG"width= {300}
    height= {450} alt="Dr.Dinesh" className={styles.image} />
        <div className={styles.details}>
          <h1 className={styles.name}>DR .DINESH SINGH CHAUHAN</h1>
          <p className={styles.specialty}>MDS</p>
          <h3 className={styles.sectionTitle}>Doctor BIO</h3>
          <p className={styles.bio}>
          Dr Dinesh Singh Chauhan is an oral and maxillofacial surgeon .He has more than 18years of clinical experience .He did his post graduate specialization from the  prestigious maniapal university
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
            <li>Wisdom tooth removal</li>
            <li>Dento facial fractures</li>
            <li>Cosmetic surgery</li>
            <li>Cleft lip and cleft palate surgery</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
