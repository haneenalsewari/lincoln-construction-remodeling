import { useState } from "react";

function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section className="before-after section-light">
      <div className="container">
        <div className="before-after__heading">
          <p className="section-label">BEFORE & AFTER</p>

          <h2>See the difference.</h2>

          <p>
            Drag the slider to reveal the transformation.
          </p>
        </div>

        <div className="comparison">
          {/* AFTER image stays underneath */}
          <img
            src="/images/projects/bathroom-2/after.jpg"
            alt="Bathroom after remodeling"
            className="comparison__image"
          />

          {/* BEFORE image is clipped over it */}
          <div
            className="comparison__before"
            style={{
              clipPath: `inset(0 ${100 - position}% 0 0)`,
            }}
          >
            <img
              src="/images/projects/bathroom-2/before.jpg"
              alt="Bathroom before remodeling"
              className="comparison__image"
            />
          </div>

          <div
            className="comparison__line"
            style={{ left: `${position}%` }}
          >
            <div className="comparison__handle">
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
            className="comparison__slider"
            aria-label="Compare bathroom before and after renovation"
          />

          <span className="comparison__label comparison__label--before">
            BEFORE
          </span>

          <span className="comparison__label comparison__label--after">
            AFTER
          </span>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;