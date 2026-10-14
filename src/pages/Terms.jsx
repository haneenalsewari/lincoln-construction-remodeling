import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SEO from "../components/SEO";

function Terms() {
  return (
    <>
      <SEO
        title="Terms of Use | Lincoln Construction & Remodeling"
        description="Website terms of use for Lincoln Construction & Remodeling."
        path="/terms"
      />
      
      <Header />

      <main className="legal-page">
        <div className="container legal-page__container">
          <p className="section-label">LEGAL</p>

          <h1>Terms of Use</h1>

          <p className="legal-page__updated">
            Last updated: October 2026
          </p>

          <section>
            <h2>Website Use</h2>

            <p>
              This website is provided for general information
              about Lincoln Construction & Remodeling and the
              services offered. By using this website, you agree
              to use it only for lawful purposes.
            </p>
          </section>

          <section>
            <h2>Project Inquiries</h2>

            <p>
              Submission of a project inquiry does not create a
              contract, guarantee availability, reserve a project
              date, or constitute acceptance of a project.
            </p>

            <p>
              Any final scope of work, pricing, payment terms,
              schedule, warranty terms, and other project
              conditions will be established separately.
            </p>
          </section>

          <section>
            <h2>Estimates</h2>

            <p>
              Any preliminary information discussed through the
              website, phone, text, email, or project inquiry
              process may be subject to change after the project
              is reviewed in greater detail.
            </p>
          </section>

          <section>
            <h2>Project Photos and Information</h2>

            <p>
              You are responsible for ensuring that information
              and photos submitted through the website are
              accurate and that you have the right to provide
              them.
            </p>
          </section>

          <section>
            <h2>Website Content</h2>

            <p>
              Website text, branding, graphics, project
              photography, and other content may not be copied,
              reproduced, or used for commercial purposes without
              permission unless otherwise permitted by law.
            </p>
          </section>

          <section>
            <h2>Third-Party Services</h2>

            <p>
              The website may rely on third-party hosting,
              storage, communication, analytics, and other
              technology providers. Lincoln Construction &
              Remodeling is not responsible for interruptions or
              failures caused by third-party services outside its
              reasonable control.
            </p>
          </section>

          <section>
            <h2>No Guarantee of Website Availability</h2>

            <p>
              The website may occasionally be unavailable due to
              maintenance, technical problems, updates, or other
              circumstances.
            </p>
          </section>

          <section>
            <h2>Changes to These Terms</h2>

            <p>
              These Terms may be updated from time to time.
              Continued use of the website after changes are
              posted constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2>Contact</h2>

            <p>
              Lincoln Construction & Remodeling
              <br />
              Richmond, Texas
              <br />
              713-577-9067
              <br />
              lincolnparker1111@gmail.com
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Terms;