import { useEffect, useState } from "react";
import AppLayout from "../../AppLayout";
import styles from "./Proverbs.module.css";

const Proverbs = () => {
  const BASE_URL = "http://localhost:8001";

  const [proverb, setProverb] = useState([]);

  useEffect(() => {
    async function fetchProverb() {
      try {
        const res = await fetch(`${BASE_URL}/proverbs`);
        const data = await res.json();
        setProverb(data);
        console.log(data);
      } catch {
        alert("An error was made fetching the proverbs api");
      }
    }
    fetchProverb();
  }, []);

  return (
    <>
      <AppLayout />
      <div className={styles.container}>
        <div className={styles.test}>
          <div key={proverb.id}>
            

          </div>
        </div>
      </div>
    </>
  );
};

export default Proverbs;
