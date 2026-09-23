import { motion } from "framer-motion";
import projects from "../../data/projects";

function FeaturedProjects() {
  return (
    <section
      className="projects section-dark"
      id="featured-projects"
    >
      <div className="container">
        <div className="projects__heading">
          <p className="section-label section-label--light">
            SELECTED WORK
          </p>

          <h2>Real transformations.</h2>

          <p className="projects__temporary">
            A look at recent remodeling, renovation, and finish work.
          </p>
        </div>

        <div className="projects__list">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
            >
              <div className="project-card__image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="project-card__info">
                <div>
                  <h3>{project.title}</h3>
                  <span>{project.category}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;