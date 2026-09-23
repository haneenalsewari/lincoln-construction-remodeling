const steps = [
  {
    number: "01",
    title: "Tell us about your project",
    text: "Describe what you want changed and upload photos of the existing space.",
  },
  {
    number: "02",
    title: "Review & consultation",
    text: "We review the scope, location, budget, and project requirements.",
  },
  {
    number: "03",
    title: "Estimate & planning",
    text: "Scope of work, materials, timing, and project expectations are established.",
  },
  {
    number: "04",
    title: "Construction",
    text: "The work begins with clear communication throughout the project.",
  },
  {
    number: "05",
    title: "Final walkthrough",
    text: "The completed work is reviewed and the project area is left clean.",
  },
];

function Process() {
  return (
    <section
      className="process section-dark"
      id="process"
    >
      <div className="container">
        <p className="section-label section-label--light">
          THE PROCESS
        </p>

        <div className="process__grid">
          {steps.map((step) => (
            <article
              className="process-step"
              key={step.number}
            >
              <span>{step.number}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;