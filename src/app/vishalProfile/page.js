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
        <Image src="http://www.smile-dental.in/wp-content/uploads/2016/09/drvishalsing.jpg" width= {300}
    height= {450} alt="Dr. Vishal" className={styles.image} />
        <div className={styles.details}>
          <h1 className={styles.name}>DR.K.VISHAL SINGH</h1>
          <p className={styles.specialty}>(B.D.S,M.D.S Prosthodontist and Implantologist)
          </p>
          <h3 className={styles.sectionTitle}>Doctor BIO</h3>
          <p className={styles.bio}>
          Dr.K.Vishal  Singh did his specialization in the department of Prosthodontics and Implantology  from the reputed Government Dental college and hospital ,Bengaluru .He has 18years of clinical experience. He has successfully placed more than 1000 dental Implants. He is consultant in all leading Dental clinics in Hyderabad
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
            <li>Dental Implants</li>
            <li>Crown and Bridges</li>
            <li>Full mouth Rehabilitation</li>
            <li>Dentures</li>
            <li>Dental Laser surgery</li>
            <li>Root canal treatment</li>
            <li>Cosmetic smile design</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
