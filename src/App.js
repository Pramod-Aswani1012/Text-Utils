import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbaar from "./Components/Navbaar.js";
// import Switch from './Components/Switch';
import Toupper from "./Components/Toupper";
import { useState } from "react";
// import Alert from './Components/Alert';
import About from "./Components/About";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";



function App() {
  const [mode, setMode] = useState("white");
  // const[theme,setTheme] = useState('white');

  // const element = document.querySelector('')

  const toggleMode = () => {
    if (mode === "white") {
      setMode("black");
      document.body.style.backgroundColor = "#1e1c1c";
    } else {
      setMode("white");
      document.body.style.backgroundColor = "white";
    }
  };
  // console.log('document.body.style.backgroundColor')
  return (
    <>
      <Router>
        <Navbaar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/about" element={
          <About />
          } />
          <Route exact path="/contactus" element={<ContactUs />} />

          <Route exact path="/services" element={<Services />} />
          <Route exact path="/" element={<Toupper mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
