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
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Intro />
        <FeaturedProjects />
        <BeforeAfter />
        <Services />
        <Trust />
        <Process />
        <ProjectForm />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

export default Home;