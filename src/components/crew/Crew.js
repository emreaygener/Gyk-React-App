import { Fragment } from "react";
import "./Crew.css";
import CrewCard from "./crewCard/CrewCard";

export default function Crew() {
  // const {data, loading, error} = DataFetcher("http://localhost:5000/api/Employees");
  const crew = [
    {
      id: 1,
      fullName: "John Doe",
      title: "CEO",
      image: "https://picsum.photos/300/400?random=1&blur=2",
      bio: "John is the CEO of our company. He is a visionary leader who has a passion for technology and innovation.",
      email: "john@doe.com",
    },
    {
      id: 2,
      fullName: "Jane Doe",
      title: "CTO",
      image: "https://picsum.photos/300/400?random=2&blur=2",
      bio: "Jane is the CTO of our company. She is a tech genius who has a passion for building amazing products.",
      email: "jane@doe.com",
    },
    {
      id: 3,
      fullName: "John Smith",
      title: "CFO",
      image: "https://picsum.photos/300/400?random=3&blur=2",
      bio: "John is the CFO of our company. He is a finance expert who has a passion for numbers and analytics.",
      email: "john@smith.com",
    },
    {
      id: 4,
      fullName: "Jane Smith",
      title: "COO",
      image: "https://picsum.photos/300/400?random=4&blur=2",
      bio: "Jane is the COO of our company. She is an operations expert who has a passion for efficiency and productivity.",
      email: "jane@smith.com",
    },
  ];
  const loading = false;
  const error = null;
  return (
    <>
      {loading && <p>Loading...</p>}

      {error && <p>Error: {error.message}</p>}

      {/* {!loading && !error && (
        <section className="crew">
          <h2>Our Crew</h2>
          <div className="crew-cards">
            {crew.map((crew) => (
              <Fragment key={crew.id}>
                <CrewCard crew={crew} />
              </Fragment>
            ))}
          </div>
        </section>
      )} */}
      <section className="crew">
        {crew.map((crew) => (
          <Fragment key={crew.id}>
            <CrewCard crew={crew} />
          </Fragment>
        ))}
      </section>
    </>
  );
}
