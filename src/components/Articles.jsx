import styles from "./c.module.css";
import { useNavigate } from "react-router";
import Markdown from "react-markdown";
export default function Articles({ article }) {
  const navigate = useNavigate();

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  return (
    <main className={styles.Article}>
      <section>
        <div>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
        <div>
          <h3>Ayodeji</h3>
          <p>{formatDate(article.createdAt)}</p>
        </div>
      </section>
      <section>
        <article key={article.id}>
          <div>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <img src={article.thumbnail_url} alt={article.title} />
            <Markdown>{article.content}</Markdown>
          </div>
        </article>
      </section>
    </main>
  );
}