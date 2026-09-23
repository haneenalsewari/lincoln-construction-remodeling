import { ArrowUpRight } from "lucide-react";
import services from "../../data/services";

function Services() {
  return (
    <section 
      className="services section-dark"
      id="capabilities"
    >
      <div className="container">
        <p className="section-label section-label--light">
          CAPABILITIES
        </p>

        <div className="services__intro">
          <h2>
            From one room to a complete transformation.
          </h2>
        </div>

        <div className="services__list">
          {services.map((service) => (
            <div
              className="service-row"
              key={service.number}
            >
              <span className="service-row__number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <ArrowUpRight className="service-row__arrow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;