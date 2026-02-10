import styles from "./c.module.css";
import { useNavigate } from "react-router";
export default function Thumbnails({ articles }) {
  const navigate = useNavigate();

  function handleClick(id, title) {
  const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  navigate(`/articles/${id}/${slug}`);
}

  return (
    <section>
      {articles.map((article) => (
        <article key={article.id} onClick={() => handleClick(article.id, article.title)}>
          <img src={article.thumbnail_url} alt={article.title} />
          <div>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}