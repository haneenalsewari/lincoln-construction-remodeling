import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ScrollToTop from "./components/layout/ScrollToTop";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;