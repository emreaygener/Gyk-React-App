import { Button, Card } from "react-bootstrap";
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
          <Button variant="primary">Read more</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogCard;
