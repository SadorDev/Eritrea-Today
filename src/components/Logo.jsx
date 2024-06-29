import styles from "../components/Logo.module.css";
import emblem from "../assets/images/emblem.png"

const Logo = () => {
  return <img className={styles.logo} src={emblem} alt="logo" />;
};

export default Logo;
