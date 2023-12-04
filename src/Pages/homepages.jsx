import About from "../Components/About"
import Contact from "../Components/Contact"
import Feature from "../Components/Features"
import Footer from "../Components/Footer"
import Menu from "../Components/Menu"
import Project from "../Components/Projects"

const HomePage = () => {
  return (
    <div>
    <Menu/>
    <About/>
    <Project/>
    <Feature/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default HomePage