import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';

const PageNav = ({ isSidebarOpen, toggleSidebar }) => {
  // Local state to track each dropdown menu's open/close state
  const [articlesDropdownOpen, setArticlesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  // Function to toggle the Articles dropdown menu
  const toggleArticlesDropdown = () => {
    setArticlesDropdownOpen(!articlesDropdownOpen);
  };

  // Function to toggle the About Eritrea dropdown menu
  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  return (
    <nav className={`${styles.nav} ${isSidebarOpen ? styles.open : ''}`}>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <NavLink to="/" className={styles.navLink} onClick={toggleSidebar}>Home</NavLink>
        </li>
        <li className={styles.navItem}>
          <div className={styles.navLink} onClick={toggleArticlesDropdown} data-show-arrow="true">Articles</div>
          <ul className={`${styles.dropdown} ${articlesDropdownOpen ? styles.open : ''}`}>
            <li><NavLink to="/articles/artsandsports" className={styles.navLink}>Arts and Sports</NavLink></li>
            <li><NavLink to="/articles/general" className={styles.navLink}>General</NavLink></li>
            <li><NavLink to="/articles/nationbuilding" className={styles.navLink}>Nation Building</NavLink></li>
          </ul>
        </li>

        <li className={styles.navItem}>
          <div className={styles.navLink} onClick={toggleAboutDropdown} data-show-arrow="true">About Eritrea</div>
          <ul className={`${styles.dropdown} ${aboutDropdownOpen ? styles.open : ''}`}>
            <li><NavLink to="/abouteritrea/erina" className={styles.navLink}>Erina</NavLink></li>
            <li><NavLink to="/abouteritrea/historyandculture" className={styles.navLink}>History and Culture</NavLink></li>
            <li><NavLink to="/abouteritrea/proverbs" className={styles.navLink}>Proverbs</NavLink></li>
            <li><NavLink to="/abouteritrea/todayinhistory" className={styles.navLink}>Today in History</NavLink></li>
          </ul>
        </li>

        <li className={styles.navItem}>
          <NavLink to="/editorial" className={styles.navLink} onClick={toggleSidebar}>Editorial</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/pressrelease" className={styles.navLink} onClick={toggleSidebar}>Press Release</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/newspapers" className={styles.navLink} onClick={toggleSidebar}>Newspapers</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/magazines" className={styles.navLink} onClick={toggleSidebar}>Magazines</NavLink>
        </li>
        <li className={styles.navItem}>
          <span className={styles.navLink} onClick={toggleSidebar} data-show-arrow="true">More</span>
          <ul className={styles.dropdown}>
            <li><NavLink to="/more/contactus" className={styles.navLink}>Contact Us</NavLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
