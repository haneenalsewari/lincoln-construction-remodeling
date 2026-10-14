import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Intro from "../components/sections/Intro";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import BeforeAfter from "../components/sections/BeforeAfter";
import Services from "../components/sections/Services";
import Trust from "../components/sections/Trust";
import Process from "../components/sections/Process";
import ProjectForm from "../components/sections/ProjectForm";
import FinalCTA from "../components/sections/FinalCTA";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/layout/Footer";
import SEO from "../components/SEO";
import BusinessSchema from "../components/BusinessSchema";

function Home() {
  return (
    <>
      <SEO
        title="Lincoln Construction & Remodeling | Richmond, TX"
        description="Residential remodeling and renovation in Richmond, Texas and the Greater Houston area. Bathrooms, kitchens, flooring, painting, interior renovations, and more."
        path="/"
      />
      <BusinessSchema />

      <Header />

      <main>
        <Hero />
        <Intro />
        <FeaturedProjects />
        <BeforeAfter />
        <Services />
        <Trust />
        <Process />
        <FAQ />
        <ProjectForm />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

export default Home;