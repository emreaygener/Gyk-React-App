import "./CrewCard.css";

export default function CrewCard({ crew }) {
  const delayFactor = (crew.id % 23) - 1;
  const animationDelay = `${delayFactor * 0.1}s`;
  return (
    <>
      <article className="crew-card" style={{ animationDelay }}>
        <img id="crew-img" src={crew.image} alt={crew.fullName} />
        <section className="crew-text">
          <h3>{crew.fullName}</h3>
          <h4>{crew.title}</h4>
          <a className="detail-crew" href={`mailto:${crew.email}`}>
            {crew.email}
          </a>
          <p className="detail-crew">{crew.bio}</p>
        </section>
      </article>
    </>
  );
}
