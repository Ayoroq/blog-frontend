import styles from "./c.module.css";
export default function Articles({ articles }) {
  return (
    <section>
      {articles.map((article) => (
        <article key={article.id}>
          <img src={article.image} alt={article.title} />
          <div>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}