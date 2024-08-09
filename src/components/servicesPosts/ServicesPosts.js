import "./ServicesPosts.css";
import { Fragment } from "react";
import ServicesCard from "./servicesCard/ServicesCard";

export default function ServicesPosts() {
  // const {data, loading, error} = DataFetcher("http://localhost:5000/api/ServicesPosts");

  const services = [
    {
      id: 1,
      title: "Service 1",
      image: "https://picsum.photos/3000/4000?random=1&blur=2",
      content:
        "Service 1 is a service that provides a service. It is a service that is provided by a service provider to a service consumer. The service provider is the one who provides the service, and the service consumer is the one who receives the service. The service provider is the one who provides the service, and the service consumer is the one who receives the service.",
    },
    {
      id: 2,
      title: "Service 2",
      image: "https://picsum.photos/3000/4000?random=2&blur=2",
      content:
        "Service 2 is a service that provides a service. It is a service that is provided by a service provider to a service consumer. The service provider is the one who provides the service, and the service consumer is the one who receives the service. The service provider is the one who provides the service, and the service consumer is the one who receives the service.",
    },
    {
      id: 3,
      title: "Service 3",
      image: "https://picsum.photos/3000/4000?random=3&blur=2",
      content:
        "Service 3 is a service that provides a service. It is a service that is provided by a service provider to a service consumer. The service provider is the one who provides the service, and the service consumer is the one who receives the service. The service provider is the one who provides the service, and the service consumer is the one who receives the service.",
    },
    {
      id: 4,
      title: "Service 4",
      image: "https://picsum.photos/3000/4000?random=4&blur=2",
      content:
        "Service 4 is a service that provides a service. It is a service that is provided by a service provider to a service consumer. The service provider is the one who provides the service, and the service consumer is the one who receives the service. The service provider is the one who provides the service, and the service consumer is the one who receives the service.",
    },
  ];
  const loading = false;
  const error = null;

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {/* {!loading && !error && (
        <>
          <header className="services-header">
            <h2>Our Services</h2>
          </header>
          <section className="services">
            {services.map((service) => (
              <Fragment key={service.id}>
                <ServicesCard service={service} />
              </Fragment>
            ))}
          </section>
        </>
      )} */}
      <header className="services-header">
        <h2>Our Services</h2>
      </header>
      <section className="services">
        {services.map((service) => (
          <Fragment key={service.id}>
            <ServicesCard service={service} />
          </Fragment>
        ))}
      </section>
    </>
  );
}
