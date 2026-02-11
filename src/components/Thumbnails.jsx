import styles from "./c.module.css";
import { useNavigate } from "react-router";

export default function Thumbnails({ articles }) {
  const navigate = useNavigate();

  function formatDate(dateString) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  function handleClick(id, title) {
    const slug = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
    navigate(`/articles/${id}/${slug}`);
  }

  return (
    <section className={styles.Thumbnails}>
      {articles.map((article) => (
        <article
          key={article.id}
          onClick={() => handleClick(article.id, article.title)}
          className={styles.Thumbnail}
        >
          <img className={styles.ThumbnailImage} src={article.thumbnail_url} alt={article.title} />
          <div>

            <time>{formatDate(article.createdAt)}</time>
            <h2 className={styles.ThumbnailTitle}>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
