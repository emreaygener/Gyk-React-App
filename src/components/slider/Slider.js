import { Carousel } from "react-bootstrap";
import "./Slider.css";
import DataFetcher from "../../util/DataFetcher";

export default function Slider() {
  const { data, loading, error } = DataFetcher(
    "http://localhost:5000/api/ServicesPosts"
  );

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <Carousel loading="lazy">
        {data.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              id="carousel-img"
              className="d-block w-100"
              src={`https://picsum.photos/2000/600?random=${slide.id}&blur=2`}
              alt={slide.title}
              height={600}
            />
            <Carousel.Caption pt-0>
              <h1>{slide.title}</h1>
              <p>{slide.content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
