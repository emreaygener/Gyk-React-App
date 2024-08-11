import { Fragment } from "react";
import DataFetcher from "../../util/DataFetcher";
import "./Blog.css";
import BlogCard from "./blogCard/BlogCard";

export default function Blog() {
  //   const { data, loading, error } = DataFetcher(
  //     "http://localhost:5000/api/BlogPosts"
  //   );

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
  ];

  const loading = false;
  const error = null;

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {!loading && !error && (
        <>
          <header id="blog-header">
            <h2>Our Blog</h2>
          </header>
          <section className="blog">
            {data.map((post) => (
              <Fragment key={post.id}>
                <BlogCard post={post} />
              </Fragment>
            ))}
          </section>
        </>
      )}
    </>
  );
}
