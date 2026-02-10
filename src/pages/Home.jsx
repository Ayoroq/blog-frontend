import styles from "./p.module.css";
import { useEffect, useContext } from "react";
import PostContext from "../context/PostContext";
import Thumbnails from "../components/Thumbnails.jsx";
export default function Home() {
  const { posts, loading, error } = useContext(PostContext);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <main className={styles.Home}>
      <h1 className={styles.mainText}>
        Welcome to my blog. I'm Ayo and this is where I document my latest
        explorations, ideas and anything i find interesting.
      </h1>
      {loading && null}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <Thumbnails articles={posts} />
      )}
    </main>
  );
}