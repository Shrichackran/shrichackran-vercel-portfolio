import { useCallback, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import AssetModal from './components/AssetModal.jsx';
import BootScreen from './components/BootScreen.jsx';
import { projects } from './data/portfolioData.js';

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [booting, setBooting] = useState(true);

  const completeBoot = useCallback(() => {
    setBooting(false);
  }, []);

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId),
    [activeProjectId]
  );

  if (booting) {
    return <BootScreen onComplete={completeBoot} />;
  }

  return (
    <div className="site-shell site-enter">
      <div className="bg-grid" />
      <div className="ambient-particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="scanline" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <div className="glow glow-three" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects onOpenAssets={setActiveProjectId} />
        <Services />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <AssetModal project={activeProject} onClose={() => setActiveProjectId(null)} />
    </div>
  );
}
