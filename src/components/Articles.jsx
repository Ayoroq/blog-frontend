import styles from './c.module.css'
export default function Articles({ articles }) {
  return (
    <section>
      {articles.map((article) => (
        <article key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <p>{article.content}</p>
        </article>
      ))}
    </section>
  );
}
