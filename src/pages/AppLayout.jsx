import { useState } from "react";
import { Outlet } from "react-router-dom"; 
import Logo from "../components/Logo";
import PageNav from "../components/PageNav";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main>
      <header className={styles.headerContainer}>
        <div className={styles.menuIcon} onClick={toggleSidebar}>
          &#9776;
        </div>
        <Logo />
        <div className={styles.heading}>
          <h1>MINISTRY OF INFORMATION</h1>
          <h2>ERITREA</h2>
        </div>
      </header>
      <PageNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Outlet /> 
    </main>
  );
};

export default AppLayout;
