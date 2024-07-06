import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <NavLink to="/" className={styles.navLink}>Home</NavLink>
        </li>

        <li className={styles.navItem}>
          <NavLink to="/articles" className={styles.navLink}>Articles</NavLink>
          <ul className={styles.dropdown}>
            <li> <NavLink to="/articles/artsandsports" className={styles.navLink}> Arts and Sports</NavLink> </li>
            <li> <NavLink to="/articles/general" className={styles.navLink}> General </NavLink> </li>
            <li> <NavLink to="/articles/nationbuilding" className={styles.navLink}> Nation Building</NavLink> </li>
          </ul>
        </li>

        <li className={styles.navItem}>
          <NavLink to="/abouteritrea" className={styles.navLink}>About Eritrea</NavLink>
          <ul className={styles.dropdown}>
            <li><NavLink to="/abouteritrea/erina" className={styles.navLink}>Erina</NavLink></li>
            <li><NavLink to="/abouteritrea/historyandculture" className={styles.navLink}>History and Culture</NavLink></li>
            <li><NavLink to="/abouteritrea/proverbs" className={styles.navLink}>Proverbs</NavLink></li>
            <li><NavLink to="/abouteritrea/todayinhistory" className={styles.navLink}>Today in History</NavLink></li>
          </ul>
        </li>

        <li className={styles.navItem}>
          <NavLink to="/editorial" className={styles.navLink}>Editorial</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/pressrelease" className={styles.navLink}>Press Release</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/newspapers" className={styles.navLink}>Newspapers</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/magazines" className={styles.navLink}>Magazines</NavLink>
        </li>

        <li className={styles.navItem}>
          <NavLink to="/more" className={styles.navLink}>More</NavLink>
          <ul className={styles.dropdown}>
            <li> <NavLink to="/more/contactus" className={styles.navLink}>Contact Us </NavLink> </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
