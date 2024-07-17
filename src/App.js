import About from "./components/About/About";
import Educations from "./components/Educations/Educations";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Works />
      <Educations />
      <Footer />
    </div>
  );
}

export default App;
