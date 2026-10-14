import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProjectGalleryCard from "../components/projects/ProjectGalleryCard";
import projectGallery from "../data/projectGallery";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Remodeling Projects | Lincoln Construction & Remodeling"
        description="View bathroom remodeling, interior renovation, flooring, painting, and residential construction projects by Lincoln Construction & Remodeling."
        path="/projects"
      />
      
      <Header />

      <main className="projects-page">
        <section className="projects-page__hero">
          <div className="container">
            <p className="section-label section-label--light">
              PROJECTS
            </p>

            <h1>
              Real work.
              <span>Real transformations.</span>
            </h1>

            <p>
              A selection of remodeling, renovation, flooring,
              and finish work completed across residential spaces.
            </p>
          </div>
        </section>

        <section className="projects-gallery">
          <div className="container">
            {projectGallery.map((project, index) => (
              <ProjectGalleryCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>

        <section className="projects-page__cta">
          <div className="container">
            <p className="section-label section-label--light">
              START A PROJECT
            </p>

            <h2>Have a project in mind?</h2>

            <button
              className="button button--primary"
              onClick={() => navigate("/#start-project")}
            >
              Start Your Project
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProjectsPage;