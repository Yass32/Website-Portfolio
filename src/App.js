import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
