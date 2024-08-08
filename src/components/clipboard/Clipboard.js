import BlogCard from "./blogCard/BlogCard";
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
      content: "This is the content of the first blog post.",
      author: "Author",
    },
    {
      id: 2,
      title: "Blog Post 2",
      content: "This is the content of the second blog post.",
      author: "Author",
    },
    {
      id: 3,
      title: "Blog Post 3",
      content: "This is the content of the third blog post.",
      author: "Author",
    },
    {
      id: 4,
      title: "Blog Post 4",
      content: "This is the content of the fourth blog post.",
      author: "Author",
    },
    {
      id: 5,
      title: "Blog Post 5",
      content: "This is the content of the fifth blog post.",
      author: "Author",
    },
    {
      id: 6,
      title: "Blog Post 6",
      content: "This is the content of the sixth blog post.",
      author: "Author",
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
              <BlogCard data={card} />
            </article>
          ))}
        </menu>
      </section>
    </>
  );
}
