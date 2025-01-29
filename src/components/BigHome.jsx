import About from "./about/about"
import Contact from "./contact/Contact"
import Experience from "./experience/experience"
import Home from "./home/home"
import Projects from "./projects/projects"
import Skills from "./skills/skills"


const BigHome = () => {

    return (  
        <>
        <Home/>
        <About/>
        {/* <Skills/> */}
        <Projects/>
        <Experience/>
        <Contact/>
        
        </>  
    )
}


export default BigHome
