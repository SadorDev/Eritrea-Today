import AppLayout from './AppLayout.jsx';
import styles from './Homepage.module.css'; // Import specific page CSS module

const Homepage = () => {
  return (
    <AppLayout>
      <main className={styles.headerContainer}>
        <h3>Welcome to the Homepage</h3>
        <p>This is where your homepage content goes.</p>
      </main>
    </AppLayout>
  );
};

export default Homepage;
