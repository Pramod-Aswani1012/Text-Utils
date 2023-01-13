import React from "react";
import logo from "./logo512.png";
import "./styleAbout.css";

export default function About() {
  return (
    <div>
      {/* <h1>This is About Page.</h1> */}
      <div class="split left">
        <div class="centered">
          <img src={logo} alt="logo" id="abtlogo" />
          <h2>Text Utils</h2>
          <p>An Easy way to Manipuulate your Text</p>
        </div>
      </div>

      <div class="split right">
        <div class="centered">
          
          <h2>Text Utils</h2>
          <p>Here you can Manipulate your text according to the way you want using the different functions provide in the website</p>
        </div>
      </div>
    </div>
  );
}
