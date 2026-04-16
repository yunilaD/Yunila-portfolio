import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contacts from "./components/Contact";
import Projects from "./components/Projects";
import TechStripe from "./components/TechStripe";

function App(){
  return (
      <div className="bg-gray-950 min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <TechStripe />
        <Skills />
        <Contacts />
      </div>
  )
}

export default App;