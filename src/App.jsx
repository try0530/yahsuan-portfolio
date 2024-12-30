import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Works from "./components/Works/Works";
import Educations from "./components/Educations/Educations";
import Footer from "./components/Footer/Footer";

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
