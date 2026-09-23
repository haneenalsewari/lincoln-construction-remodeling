import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const sectionId = hash.replace("#", "");

      let attempts = 0;

      const scrollToSection = () => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          return;
        }

        attempts += 1;

        if (attempts < 20) {
          setTimeout(scrollToSection, 50);
        }
      };

      setTimeout(scrollToSection, 50);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;