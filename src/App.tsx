import { BrowserRouter } from 'react-router-dom';

import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Blog } from './sections/Blog';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import './assets/fonts/fonts.css';
import './styles/reset.css';
import './styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main className="text-primary dark:text-primary-dark">
          <div className="max-w-[92vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-[75vw] 2xl:max-w-[66vw] mx-auto">
            <Hero />
            <Experience />
            <About />
            <Projects />
            <Skills />
            <Blog />
          </div>
          <Contact />
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
