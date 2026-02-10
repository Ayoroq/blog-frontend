import styles from "./p.module.css";
import { useEffect, useContext } from "react";
import { useParams } from "react-router";
import PostContext from "../context/PostContext";
import Articles from "../components/Articles.jsx";

export default function Article() {
  const { id } = useParams();
  const { posts, loading, error } = useContext(PostContext);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  if (loading) return null;
  if (error) return <p>{error}</p>;

  const article = posts.find((post) => post.id === parseInt(id));

  return (
    <main className={styles.Article}>
      {article && <Articles articles={[article]} />}
    </main>
  );
}