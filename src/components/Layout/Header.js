/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../../assets/planet.png';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles['logo-div']}>
    <img className={styles.logo} src={Logo} alt="Space Travelers Logo" />
    <a href="#" className={styles['header-link']}>
      <span>Space Traveler&apos;s hub</span>
    </a>
  </div>
);

export default Header;
