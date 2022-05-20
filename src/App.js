import "./App.css";
import Intro from "./components/intro/Intro";
import Work from "./components/work/Work";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      {" "}
      <Intro />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
