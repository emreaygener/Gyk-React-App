import "./ServicesCard.css";
export default function ServicesCard({ service }) {
  const backgroundImage = `url(${service.image})`;
  return (
    <article className="services-card" style={{ backgroundImage }}>
      <section className="services-text">
        <h3>{service.title}</h3>
        <p>{service.content}</p>
      </section>
    </article>
  );
}
