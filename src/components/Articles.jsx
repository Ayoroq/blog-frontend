import styles from "./c.module.css";
import Markdown from 'react-markdown'
export default function Articles({ articles }) {
  return (
    <section>
      {articles.map((article) => (
        <article key={article.id}>
          <div>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <img src={article.thumbnail_url} alt={article.title} />
            <Markdown>{article.content}</Markdown>
          </div>
        </article>
      ))}
    </section>
  );
}