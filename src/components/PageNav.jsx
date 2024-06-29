import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

const PageNav = () => {
  return (
    <nav className={styles.nav}>
     
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" className={styles.navLink}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/Articles" className={styles.navLink}>Articles</NavLink>
        </li>
        <li>
          <NavLink to="/AboutEritrea" className={styles.navLink}>About Eritrea</NavLink>
        </li>
        <li>
          <NavLink to="/Editorial" className={styles.navLink}>Editorial</NavLink>
        </li>
        <li>
          <NavLink to="/PressRelease" className={styles.navLink}>Press Release</NavLink>
        </li>
        <li>
          <NavLink to="/Newspapers" className={styles.navLink}>Newspapers</NavLink>
        </li>
        <li>
          <NavLink to="/Magazines" className={styles.navLink}>Magazines</NavLink>
        </li>
        <li>
          <NavLink to="/More" className={styles.navLink}>More</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
