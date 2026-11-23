import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import AfrimTechnologies from './components/AfrimTechnologies';
import AILab from './components/AILab';
import Certifications from './components/Certifications';
import EducationExperience from './components/EducationExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <AfrimTechnologies />
        <AILab />
        <Certifications />
        <EducationExperience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
