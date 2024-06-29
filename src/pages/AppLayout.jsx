import Logo from "../components/Logo.jsx";
import PageNav from "../components/PageNav.jsx";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <main>
      <header className={styles.headerContainer}>
        <Logo />
        <div className={styles.heading}>
          <h1>Ministry of Information</h1>
          <h2>Eritrea</h2>
        </div>
      </header>
      <nav>
        <PageNav />
      </nav>
    </main>
  );
};

export default AppLayout;
