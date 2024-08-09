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
      <section className="services-text">
        <h3>{service.title}</h3>
        <p>{service.content}</p>
      </section>
    </article>
  );
}
