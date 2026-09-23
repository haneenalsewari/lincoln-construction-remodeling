const trustItems = [
  "20+ Years Experience",
  "Insured",
  "Workmanship Warranty",
  "Free Estimates",
  "Cleanup Included",
];

function Trust() {
  return (
    <section className="trust section-light">
      <div className="container">
        <p className="section-label">BACKED BY EXPERIENCE</p>

        <div className="trust__heading">
          <h2>
            Experience you can see in the finished work.
          </h2>

          <p>
            More than 20 years of remodeling and renovation 
            experience brings practical solutions, careful workmanship, 
            and attention to every stage of the project.
          </p>
        </div>

        <div className="trust__items">
          {trustItems.map((item) => (
            <div className="trust__item" key={item}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trust;