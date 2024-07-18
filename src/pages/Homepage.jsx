import { useEffect, useState } from "react";

import styles from "./Homepage.module.css";
import AppLayout from "./AppLayout.jsx";

const Homepage = () => {
  const BASE_URL = "http://localhost:8000";
  const [news, setNews] = useState([]);
  const [generalNews, setGeneralNews] = useState([]);

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
  });

  useEffect(() => {
    async function fetchGeneral() {
      try {
        const res = await fetch(`${BASE_URL}/general`);
        const data = await res.json();
        setGeneralNews(data);
      } catch {
        alert("There was an error loading the data");
      }
    }
    fetchGeneral();
  }, []);

  return (
    <>
      <main className={styles.headerContainer}>
        <AppLayout />
        <div className={styles.gridContainer}>
          <div className={styles.mainHeadline}>
            {news.length > 0 && (
              <div key={news[0].id}>
                <img src={news[0].image} alt={news[0].title} />
                <h2>{news[0].title}</h2>
                <p>{news[0].summary}</p>
              </div>
            )}
          </div>
          <div className={styles.sideHeadline}>
            {news.slice(1, 3).map((story) => (
              <div key={story.id}>
                <img src={story.image} alt={story.title} />
                <h3>{story.title}</h3>
              </div>
            ))}
          </div>
          <div className={styles.sideHeadline}>
            {news.slice(3, 5).map((story) => (
              <div key={story.id}>
                <img src={story.image} alt={story.title} />
                <h3>{story.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <section className={styles.generalSection}>
          <span class="material-symbols-outlined">desktop_windows</span>
          <h1> General </h1>
          <hr width="100%" size="2" />

          <div className={styles.generalNewsContainer}>
            {generalNews.slice(0, 5).map((story) => (
              <div key={story.id} className={styles.generalNewsItem}>
                <img src={story.image} alt={story.title} />
                <h3> {story.title}</h3>
                <p> {story.summary} </p>
              </div>
            ))}
          </div>
        </section>
        <hr width="100%" size="2" />

        <section className={styles.generalNewspapers}>
          <span className="material-symbols-outlined">Newspaper</span>
          <h1> Newspapers</h1>
          <hr width="100%" size="2" />
          <div className={styles.style}></div>
          <div className={styles.style}></div>
          <div className={styles.style}></div>
        </section>
      </main>
    </>
  );
};

export default Homepage;
