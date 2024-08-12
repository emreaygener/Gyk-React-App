import React from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";
import DataFetcher from "../../../util/DataFetcher";

export default function BlogDetail() {
  const { id } = useParams();
  //   const { data, loading, error } = DataFetcher(
  //     "http://localhost:5000/api/BlogPosts/" + id
  //   );
  const data = {
    id: 1,
    title: "Blog Title",
    author: "Author",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac justo ultricies volutpat. Nulla facilisi. Phasellus in odio id orci posuere ultrices. Nullam sit amet nunc in tellus pharetra tincidunt. Nulla facilisi. Ut euismod, ante nec aliquam luctus, justo nunc varius nunc, a luctus tortor justo ut libero. Nulla facilisi. Nullam nec purus ac justo ultricies volutpat. Nulla facilisi. Phasellus in odio id orci posuere ultrices. Nullam sit amet nunc in tellus pharetra tincidunt. Nulla facilisi. Ut euismod, ante nec aliquam luctus, justo nunc varius nunc, a luctus tortor justo ut libero. Nulla facilisi. Nullam nec purus ac justo ultricies volutpat. Nulla facilisi. Phasellus in odio id orci posuere ultrices. Nullam sit amet nunc in tellus pharetra tincidunt. Nulla facilisi. Ut euismod, ante nec aliquam luctus, justo nunc varius nunc, a luctus tortor justo ut libero. Nulla facilisi. Nullam nec purus ac justo ultricies volutpat. Nulla facilisi. Phasellus in odio id orci posuere ultrices. Nullam sit amet nunc in tellus pharetra tincidunt. Nulla facilisi. Ut euismod, ante nec aliquam luctus, justo nunc varius nunc, a luctus tortor justo ut libero. Nulla facilisi.",
  };
  const loading = false;
  const error = null;

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {!loading && !error && (
        <>
          <section className="blog-detail">
            <img
              id="blog-detail-img"
              src={`https://picsum.photos/2000/300?random=${data.id}&blur=2`}
              alt={data.title}
              height={300}
            />
            <h1>{data.title}</h1>
            <h3>{data.author}</h3>
            <p>{data.content}</p>
          </section>
        </>
      )}
    </>
  );
}
