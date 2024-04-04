import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Nexus Studio</h1>
      {/* Toggle button for mobile screens */}
      <button className={styles.navToggle} onClick={toggleNav}>
        Menu
      </button>
      {/* Conditional rendering of navigation based on state */}
      {isNavVisible && (
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>Home</li>
            <li className={styles.navItem}>About</li>
            <li className={styles.navItem}>Services</li>
            <li className={styles.navItem}>Contact</li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
