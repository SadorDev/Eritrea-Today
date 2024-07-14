import { useEffect, useState } from "react";

import styles from "./Homepage.module.css";
import AppLayout from "./AppLayout.jsx";

const Homepage = () => {
  const BASE_URL = "http://localhost:8000";
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(`${BASE_URL}/topStories`);
        const data = await res.json();
        setNews(data);
      } catch {
        alert("There was an error loading the data");
      }
    }
    fetchNews();
  }, []);

  return (
    <main className={styles.headerContainer}>
      <AppLayout />
      <div>
        <ul>
          {news.map((story) => (
            <li key={story.id}>
              <h2>{story.title}</h2>
              <p>{story.summary}</p>
              <img src={story.image} alt={story.title} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Homepage;
