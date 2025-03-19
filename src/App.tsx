import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import FuturePlans from './components/sections/FuturePlans';
import Gallery from './components/Gallery';
import { Projects } from './components/sections/Projects';
import { Companies } from './components/sections/Companies';
export function App() {
  return <AnimatePresence>
      <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 overflow-x-hidden">
        <Hero />
        <Header/>
        <Companies />
        <Services />
        <Experience />
        <Skills />
        <Projects />
        <Gallery />  
        <Contact />
        <FuturePlans />
        <Footer />
      </div>
    </AnimatePresence>;
}