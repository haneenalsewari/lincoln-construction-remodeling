import Header from "../components/layout/Header";
import ProjectForm from "../components/sections/ProjectForm";
import Footer from "../components/layout/Footer";

function ContactPage() {
  return (
    <>
      <Header />

      <main className="contact-page">
        <ProjectForm />
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;