import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToHomeSection = (sectionId) => {
    setMenuOpen(false);

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);

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

    navigate("/");

    let attempts = 0;

    const tryToScroll = () => {
      attempts += 1;

      if (scrollToSection()) {
        return;
      }

      if (attempts < 15) {
        setTimeout(tryToScroll, 50);
      }
    };

    setTimeout(tryToScroll, 50);
  };

  const handleHomeClick = () => {
    setMenuOpen?.(false);

    if (location.pathname === "/") {
      // Remove any hash like #contact, #process, etc.
      window.history.replaceState(null, "", "/");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    navigate("/");
  };

  return (
    <header
      className={`header ${
        scrolled ? "header--scrolled" : ""
      }`}
    >
      <div className="header__inner container">
        <button
          className="brand brand-button"
          onClick={handleHomeClick}
          aria-label="Go to homepage"
        >
          <img
            src="/images/logo/lincoln-mark.png"
            alt=""
            className="brand__logo"
          />

          <div className="brand__text">
            <span className="brand__name">
              LINCOLN
            </span>

            <span className="brand__sub">
              CONSTRUCTION & REMODELING
            </span>
          </div>
        </button>

        <nav className="desktop-nav">
          <button
            className="nav-scroll-button"
            onClick={handleHomeClick}
          >
            Home
          </button>

          <button
            className="nav-scroll-button"
            onClick={() =>
              goToHomeSection("capabilities")
            }
          >
            Services
          </button>

          <Link to="/projects">
            Projects
          </Link>

          <button
            className="nav-scroll-button"
            onClick={() =>
              goToHomeSection("process")
            }
          >
            Process
          </button>

          <button
            className="nav-scroll-button"
            onClick={() =>
              goToHomeSection("contact")
            }
          >
            Contact
          </button>
        </nav>

        <button
          className="header__cta"
          onClick={() =>
            goToHomeSection("start-project")
          }
        >
          Start a Project
        </button>

        <button
          className="mobile-menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="mobile-nav-scroll"
            onClick={handleHomeClick}
          >
            Home
          </button>

          <button
            className="mobile-nav-scroll"
            onClick={() =>
              goToHomeSection("capabilities")
            }
          >
            Services
          </button>

          <Link
            to="/projects"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Projects
          </Link>

          <button
            className="mobile-nav-scroll"
            onClick={() =>
              goToHomeSection("process")
            }
          >
            Process
          </button>

          <button
            className="mobile-nav-scroll"
            onClick={() =>
              goToHomeSection("contact")
            }
          >
            Contact
          </button>

          <button
            className="mobile-start-project"
            onClick={() =>
              goToHomeSection("start-project")
            }
          >
            Start a Project
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;