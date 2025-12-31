import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
