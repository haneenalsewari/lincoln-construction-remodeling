import { motion } from "framer-motion";

function Intro() {
  return (
    <section className="intro section-light">
      <div className="container intro__grid">
        <div>
          <p className="section-label">WHAT WE DO</p>

          <motion.h2
            className="intro__headline"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            We transform outdated spaces into something exceptional.
          </motion.h2>
        </div>

        <div className="intro__right">
          <p>
            Lincoln Construction & Remodeling handles substantial residential renovations
            throughout Richmond and the surrounding Houston area—from kitchens and 
            bathrooms to flooring, finishes, interior construction, and full-home renovations.
          </p>

          <div className="experience-stat">
            <strong>20+</strong>
            <span>Years of hands-on remodeling experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;