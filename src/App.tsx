import Footer from "./components/Footer"
import Navbar from "./components/NavBar"
import About from "./sections/About"
import Contact from "./sections/Contacts"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App