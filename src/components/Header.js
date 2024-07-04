// components/Header.js
import React from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.headerTop}>
      <div className={styles.headerContainer}>
        {/* Left Section: Logo */}
        <div className={styles.headerLeft}>
          <a href="https://www.smile-dental.in/" title="Smile-Dental - Dental Laser Treatment" rel="home">
            <img className={styles.logo} src="//www.smile-dental.in/wp-content/uploads/2022/03/logo-1-smiledental.png" alt="Smile-Dental" />
          </a>
        </div>

        {/* Right Section: Contact Info and Menu */}
        <div className={styles.headerRight}>
          {/* Bottom Section: Navigation Menu */}
          <nav className={styles.mainMenu}>
            <ul className={styles.mainMenuList}>
              <li className={`${styles.menuItem} ${styles.active}`}>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/about-us">
                  About Us
                </Link>
              </li>
              <li className={`${styles.menuItem} ${styles.hasSub}`}>
                <a href="#">Services</a>
                <div className={styles.popup}>
                  <div className={styles.inner}>
                    <ul className={styles.subMenu}>
                      <li className={styles.subMenuItem}>
                        <Link href="/root-canal-treatment">
                          Root Canal Treatment
                        </Link>
                      </li>
                      <li className={styles.subMenuItem}>
                        <Link href="/dentures">
                          Dentures
                        </Link>
                      </li>
                      <li className={styles.subMenuItem}>
                        <Link href="/dental-fillings">
                          Dental Fillings
                        </Link>
                      </li>
                      <li className={styles.subMenuItem}>
                        <Link href="/dental-braces">
                          Dental Braces
                        </Link>
                      </li>
                      <li className={styles.subMenuItem}>
                        <a href="/dental-crowns-bridges">Dental Crowns & Bridges</a>
                      </li>
                      <li className={styles.subMenuItem}>
                        <a href="/dental-smile-makeover">Dental Smile Makeover</a>
                      </li>
                      <li className={styles.subMenuItem}>
                        <a href="/teeth-whitening">Teeth Whitening</a>
                      </li>
                      <li className={styles.subMenuItem}>
                        <a href="/wisdom-tooth-removal">Wisdom Tooth Removal</a>
                      </li>
                      <li className={styles.subMenuItem}>
                        <a href="/dental-implants">Dental Implants</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className={styles.menuItem}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
