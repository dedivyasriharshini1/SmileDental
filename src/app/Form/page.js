// /pages/Form.js
'use client';

import React from 'react';
import styles from './Form.module.css';
import Layout from '@/components/Layout';

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.ptLeft}>
          <h1 className={styles.pageTitle}>Book an Online Appointment</h1>
          <nav className={styles.breadcrumbs}>
            <span>
              <a href="/">Home</a> »{' '}
              <span className={styles.breadcrumbLast} aria-current="page">
                Book an Online Appointment
              </span>
            </span>
          </nav>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            First Name *
            <input type="text" name="firstName" required />
          </label>
          <label>
            Phone *
            <input type="tel" name="phone" required />
          </label>
          <label>
            Email *
            <input type="email" name="email" required />
          </label>
          <label>
            Appointment Date *
            <input type="date" name="appointmentDate" required />
          </label>
          <label>
            Select Location *
            <select name="location" required>
              <option value="">- Select Location -</option>
              <option value="banjaraHills">Banjara Hills</option>
              <option value="kompally">Kompally</option>
            </select>
          </label>
          <label>
            From Which Country you belong? *
            <select name="country" required>
              <option value="">Select Country</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
          </label>
          <label>
            How can we help you? *
            <textarea name="help" required></textarea>
          </label>
          <button className="button" type="submit">Book Appointment</button>
        </form>
      </div>
    </Layout>
  );
};

export default Form;
