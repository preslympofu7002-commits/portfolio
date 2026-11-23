import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import AfrimTechnologies from "./components/AfrimTechnologies";
import AILab from "./components/AILab";
import Certifications from "./components/Certifications";
import EducationExperience from "./components/EducationExperience";
import Beyond from "./components/Beyond";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <AfrimTechnologies />
        <Skills />
        <AILab />
        <Certifications />
        <EducationExperience />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
