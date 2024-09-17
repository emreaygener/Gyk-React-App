import BlogCard from "../blog/blogCard/BlogCard";
import DataFetcher from "../../util/DataFetcher";
import "./Clipboard.css";

export default function Clipboard() {
  // const { data, loading, error } = DataFetcher(
  //   "http://localhost:5000/api/BlogPosts"
  // );
  const data = [
    {
      id: 1,
      title: "Blog Post 1",
      author: "John Doe",
      summary: "This is the first blog post.",
      content:
        "This is the first blog post. It is very interesting. There are many things to learn from it. so, read it carefully. And enjoy it.",
      image: "https://picsum.photos/300/300/?random",
    },
    {
      id: 2,
      title: "Blog Post 2",
      author: "Jane Doe",
      summary: "This is the second blog post.",
      content:
        "This is the second blog post. It is very interesting. There are many things to learn from it. so, read it carefully. And enjoy it.",
      image: "https://picsum.photos/300/300/?randomid=2",
    },
    {
      id: 3,
      title: "Blog Post 3",
      author: "John Doe",
      summary: "This is the third blog post.",
      content:
        "This is the third blog post. It is very interesting. There are many things to learn from it. so, read it carefully. And enjoy it.",
      image: "https://picsum.photos/300/300/?randomid=3",
    },
    {
      id: 4,
      title: "Blog Post 4",
      author: "Jane Doe",
      summary: "This is the fourth blog post.",
      content:
        "This is the fourth blog post. It is very interesting. There are many things to learn from it. so, read it carefully. And enjoy it.",
      image: "https://picsum.photos/300/300/?randomid=4",
    },
    {
      id: 5,
      title: "Blog Post 5",
      author: "John Doe",
      summary: "This is the fifth blog post.",
      content:
        "This is the fifth blog post. It is very interesting. There are many things to learn from it. so, read it carefully. And enjoy it.",
      image: "https://picsum.photos/300/300/?randomid=5",
    },
    {
      id: 6,
      title: "Blog Post 6",
      author: "Jane Doe",
      summary: "This is the sixth blog post.",
      content:
        "This is the sixth blog post. It is very interesting. There are many things to learn from it. so, read it carefully. And enjoy it.",
      image: "https://picsum.photos/300/300/?randomid=6",
    },
  ];

  const loading = false;

  const error = null;

  return (
    <>
      {loading && <p>Loading...</p>}

      {error && <p>Error: {error.message}</p>}

      {/* {!loading && !error && (
        <section id="blog-section">
          <menu id="blog-menu">
            {data.map((card) => (
              <article key={card.id}>
                <BlogCard data={card} />
              </article>
            ))}
          </menu>
        </section>
      )} */}
      <section id="blog-section">
        <menu id="blog-menu">
          {data.map((card) => (
            <article key={card.id}>
              <BlogCard post={card} />
            </article>
          ))}
        </menu>
      </section>
    </>
  );
}
