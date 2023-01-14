import "./App.css";
// import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate } from "react-router-dom";
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
  const[mobile,setMobile]=useState(false);
  // const[theme,setTheme] = useState('white');

  // const element = document.querySelector('')

  const toggleMobile = ()=>{
    if(mobile)
    {
      setMobile(false);
    }
    else
    {
      setMobile(true);
    }
  }

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
        <Navbaar mode={mode} toggleMode={toggleMode} mobile={mobile} toggleMobile={toggleMobile}/>
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Toupper mode={mode} />} />
          <Route exact path="/about" element={
          <About />
          } />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route
      path="*"
      element={<Navigate to="/" />}
    />
          <Route exact path="/services" element={<Services />} />
        </Routes>
        
        {/* <Toupper mode={mode} /> */}
        </div>
      </Router>
    </>
  );
}


export default App;
