import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ data }) => {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={`https://picsum.photos/800/600?random=${data.id}&blur=2`}
        />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Subtitle>{data.author}</Card.Subtitle>
          <Link
            to={`/blog/${data.id}`}
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
            }}
          >
            <Button variant="primary">Read more</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogCard;
