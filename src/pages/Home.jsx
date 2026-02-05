import styles from "./p.module.css";
import { useEffect, useContext } from "react";
import PostContext from "../context/PostContext";
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
        <section className={styles.articleContainer}>
          {posts.map((post) => (
            <article key={post.id} className={styles.article}>
              <h2 className={styles.title}>{post.title}</h2>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}