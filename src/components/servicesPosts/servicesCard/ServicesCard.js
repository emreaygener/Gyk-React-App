import "./ServicesCard.css";
export default function ServicesCard({ service }) {
  const backgroundImage = `url(${service.image})`;
  const delayFactor = (service.id % 23) - 1;
  const animationDelay = `${delayFactor * 0.2}s`;
  return (
    <article
      className="services-card"
      style={{ backgroundImage, animationDelay }}
    >
      <details className="services-text">
        <summary>
          <strong>{service.title}</strong>
        </summary>
        <p>{service.content}</p>
      </details>
    </article>
  );
}
