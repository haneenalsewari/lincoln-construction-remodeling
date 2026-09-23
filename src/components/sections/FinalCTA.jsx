function FinalCTA() {
  const scrollToProjectForm = () => {
    document
      .getElementById("start-project")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="final-cta">
      <div className="final-cta__overlay" />

      <div className="container final-cta__content">
        <h2>
          Your home can be better than it is today.
        </h2>

        <button
          className="button button--primary"
          onClick={scrollToProjectForm}
        >
          Start Your Project
        </button>
      </div>
    </section>
  );
}

export default FinalCTA;