import Navbar from "../app/(group)/component/navbar"
import About from "./(group)/component/about"
import Contact from "./(group)/component/contact"
import Footer from "./(group)/component/footer"
import Hero from "./(group)/component/hero"
import Project from "./(group)/component/project"
import Skills from "./(group)/component/skill"

 export default function Home() {

    return (
        <>
        
        
        <Navbar/>
        <Hero/> 
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        
        
        
        
        <Footer/>
        
        
        </>
    )
  }