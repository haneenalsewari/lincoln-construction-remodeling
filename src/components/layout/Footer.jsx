import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToHomeSection = (sectionId) => {
    const scrollToSection = () => {
      const section =
        document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        return true;
      }

      return false;
    };

    if (location.pathname === "/") {
      scrollToSection();
      return;
    }

    navigate(`/#${sectionId}`);
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.history.replaceState(
        null,
        "",
        "/"
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    navigate("/");
  };

  const handleProjectsClick = () => {
    if (
      location.pathname === "/projects"
    ) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    navigate("/projects");
  };

  return (
    <footer
      className="footer"
      id="contact"
    >
      <div className="container footer__top">
        <button
          className="footer__brand footer-brand-button"
          onClick={handleHomeClick}
          aria-label="Go to homepage"
        >
          <img
            src="/images/logo/lincoln-mark.png"
            alt=""
          />

          <div>
            <strong>LINCOLN</strong>

            <span>
              Construction & Remodeling
            </span>
          </div>
        </button>

        <div className="footer__contact">
          <span>Richmond, Texas</span>

          <span>
            Serving Greater Houston
          </span>

          <a href="tel:+17135779067">
            713-577-9067
          </a>

          <a href="mailto:lincolnparker1111@gmail.com">
            lincolnparker1111@gmail.com
          </a>
        </div>

        <nav className="footer__links">
          <button
            onClick={handleHomeClick}
          >
            Home
          </button>

          <button
            onClick={() =>
              goToHomeSection(
                "capabilities"
              )
            }
          >
            Services
          </button>

          <button
            onClick={handleProjectsClick}
          >
            Projects
          </button>

          <button
            onClick={() =>
              goToHomeSection("contact")
            }
          >
            Contact
          </button>
        </nav>
      </div>

      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()}{" "}
          Lincoln Construction &
          Remodeling
        </span>

        <div className="footer__legal">
          <Link to="/privacy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;