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
        <Image src="http://www.smile-dental.in/wp-content/uploads/2016/09/doctor.png" width= {300}
    height={450}alt="Dr.Prashanth" className={styles.image} />
        <div className={styles.details}>
          <h1 className={styles.name}>DR .PRASHANTH KUMAR</h1>
          <p className={styles.specialty}>MDS</p>
          <h3 className={styles.sectionTitle}>Doctor BIO</h3>
          <p className={styles.bio}>
          Dr Prashant Kumar is an orthodontist and dent facial orthopedician. He has 16 years of clinical experience. He is a leading consultant in all major dental clinics in Telangana state
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
            <li>Orthodontist</li>
            <li>Dento facial orthopedician.</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
