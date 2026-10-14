import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SEO from "../components/SEO";

function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Lincoln Construction & Remodeling"
        description="Read the privacy policy for Lincoln Construction & Remodeling and learn how website inquiries, contact information, and project photos are handled."
        path="/privacy"
      />
      
      <Header />

      <main className="legal-page">
        <div className="container legal-page__container">
          <p className="section-label">LEGAL</p>

          <h1>Privacy Policy</h1>

          <p className="legal-page__updated">
            Last updated: October 2026
          </p>

          <section>
            <h2>Information We Collect</h2>

            <p>
              When you submit a project inquiry through this
              website, Lincoln Construction & Remodeling may
              collect information including your name, phone
              number, email address, project address, ZIP code,
              project description, approximate dimensions,
              estimated budget, preferred contact method, and
              project photos.
            </p>
          </section>

          <section>
            <h2>How We Use Your Information</h2>

            <p>
              Information submitted through the website is used
              to review your project, respond to your inquiry,
              prepare for estimates or consultations, communicate
              with you about potential work, and operate and
              improve the website.
            </p>
          </section>

          <section>
            <h2>Project Photos</h2>

            <p>
              Photos submitted through the project inquiry form
              are used to help evaluate the requested work. They
              are stored through a third-party cloud media
              provider and are not intended for public display
              unless separate permission is provided.
            </p>
          </section>

          <section>
            <h2>Service Providers</h2>

            <p>
              We may use third-party service providers to operate
              the website and process inquiries. These may include
              Cloudinary for project photo storage, Resend for
              email delivery, Vercel for website hosting, and
              analytics providers used to understand website
              usage.
            </p>
          </section>

          <section>
            <h2>Cookies and Analytics</h2>

            <p>
              The website may use analytics technologies to
              understand how visitors use the site. These tools
              may collect information such as browser type,
              device type, pages visited, and general usage
              information. Where required, appropriate consent
              controls may be provided.
            </p>
          </section>

          <section>
            <h2>Sharing of Information</h2>

            <p>
              Personal information is not sold. Information may
              be shared with service providers when necessary to
              operate the website, process project inquiries, or
              provide requested services.
            </p>
          </section>

          <section>
            <h2>Data Security</h2>

            <p>
              Reasonable measures are used to protect information
              submitted through the website. However, no method
              of internet transmission or electronic storage can
              be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2>Data Retention</h2>

            <p>
              Project inquiry information may be retained for as
              long as reasonably necessary to respond to the
              inquiry, maintain business records, and support
              potential or completed projects.
            </p>
          </section>

          <section>
            <h2>Your Choices</h2>

            <p>
              You may contact Lincoln Construction & Remodeling
              to request correction or deletion of personal
              information you previously submitted, subject to
              applicable legal and business record requirements.
            </p>
          </section>

          <section>
            <h2>Contact</h2>

            <p>
              Questions about this Privacy Policy can be directed
              to:
            </p>

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

export default PrivacyPolicy;