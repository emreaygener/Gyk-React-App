import "./BlogCard.css";

export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <img src={post.image} alt={post.title} />
      <section className="blog-text">
        <h2>{post.title}</h2>
        <h3>{post.author}</h3>
        <p>{post.summary}</p>
      </section>
      <a href={`/blog/${post.id}`}>Read More</a>
    </article>
  );
}
