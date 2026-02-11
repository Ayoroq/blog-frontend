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
    <section>
      {articles.map((article) => (
        <article
          key={article.id}
          onClick={() => handleClick(article.id, article.title)}
        >
          <img src={article.thumbnail_url} alt={article.title} />
          <div>

            <time>{formatDate(article.createdAt)}</time>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
