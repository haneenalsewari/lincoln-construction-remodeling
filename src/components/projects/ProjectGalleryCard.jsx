import { useState } from "react";

function ProjectGalleryCard({ project, index }) {
  const [position, setPosition] = useState(50);

  const comparisonClass = [
    "project-comparison",
    project.fit === "contain" ? "project-comparison--contain" : "",
    project.fit === "home" ? "project-comparison--home" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className="project-gallery-card">
      <div className="project-gallery-card__header">
        <div>
          <span className="project-gallery-card__number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <h2>{project.title}</h2>
        </div>

        <div className="project-gallery-card__meta">
          <span>{project.category}</span>
          <p>{project.description}</p>
        </div>
      </div>

      <div className={comparisonClass}>
        <img
          src={project.after}
          alt={`${project.title} after`}
          className="project-comparison__image"
        />

        <div
          className="project-comparison__before"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <img
            src={project.before}
            alt={`${project.title} before`}
            className="project-comparison__image"
          />
        </div>

        <div
          className="project-comparison__line"
          style={{ left: `${position}%` }}
        >
          <div className="project-comparison__handle">
            <span className="slider-arrow">↔</span>
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) =>
            setPosition(Number(event.target.value))
          }
          className="project-comparison__slider"
          aria-label={`Compare ${project.title} before and after`}
        />

        <span className="project-comparison__label project-comparison__label--before">
          BEFORE
        </span>

        <span className="project-comparison__label project-comparison__label--after">
          AFTER
        </span>
      </div>
    </article>
  );
}

export default ProjectGalleryCard;