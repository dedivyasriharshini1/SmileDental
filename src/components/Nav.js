// Add this line if using Next.js App Router and this needs to be a Client Component

import React from 'react';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import { AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Nav = () => {
  return (
    <div className={styles.headerContact}>
      <ul className={styles.navPills}>
        <li className={styles.navItem}>
          <Link href="/Form">BOOK AN ONLINE APPOINTMENT</Link>
        </li>
        <li className={styles.navItem}>
          <span className={styles.wsNowrap}>
          <AiOutlineEnvironment className={styles.icon} />Banjara Hills
          </span>
        </li>
        <li className={styles.navItem}>
          <span className={styles.wsNowrap}>
          <AiOutlineEnvironment className={styles.icon} /> Kompally
          </span>
        </li>
        <li className={styles.navItem}>
          <span className={styles.wsNowrap}>
          <AiOutlineMail className={styles.icon} />
            mail@example.com
          </span>
        </li>
        <li className={styles.navItem}>
          <span className={styles.wsNowrap}>
          <AiOutlinePhone className={styles.icon} />(800) 123-4567
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
