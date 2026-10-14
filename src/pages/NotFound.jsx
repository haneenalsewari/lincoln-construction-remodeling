import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SEO from "../components/SEO";

function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <SEO
        title="Page Not Found | Lincoln Construction & Remodeling"
        description="The page you requested could not be found."
        path={location.pathname}
        noIndex
      />

      <Header />

      <main className="not-found">
        <div className="container not-found__content">
          <p className="section-label section-label--light">
            404
          </p>

          <h1>
            This page doesn’t exist.
          </h1>

          <p>
            The page may have moved, or the address may
            be incorrect.
          </p>

          <div className="not-found__actions">
            <button
              className="button button--primary"
              onClick={() => navigate("/")}
            >
              Go Home
            </button>

            <button
              className="button button--outline"
              onClick={() =>
                navigate("/projects")
              }
            >
              View Projects
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default NotFound;