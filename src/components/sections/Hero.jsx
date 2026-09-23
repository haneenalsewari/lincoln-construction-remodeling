import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const scrollToProjectForm = () => {
    document
      .getElementById("start-project")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero__overlay" />

      <div className="hero__content container">
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          RESIDENTIAL REMODELING · RICHMOND, TEXAS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.35,
          }}
        >
          Transforming Homes.
          <span>Elevating Spaces.</span>
        </motion.h1>

        <motion.p
          className="hero__description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.55,
          }}
        >
          Thoughtful remodeling and renovation backed by more
          than 20 years of hands-on experience.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.75,
          }}
        >
          <button
            className="button button--primary"
            onClick={scrollToProjectForm}
          >
            Start Your Project
          </button>

          <button
            className="button button--text"
            onClick={() => navigate("/projects")}
          >
            Explore Our Work
            <ArrowDownRight size={17} />
          </button>
        </motion.div>
      </div>

      <div className="hero__services">
        <span>Bathroom</span>
        <span>Kitchen</span>
        <span>Interior Renovation</span>
        <span>Flooring</span>
        <span>Finishes</span>
      </div>
    </section>
  );
}

export default Hero;