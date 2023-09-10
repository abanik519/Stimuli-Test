import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import pdf from "./colors-pdf.png";

const App = (props) => {
  React.useEffect(() => {
    var count = 1;
    window.addEventListener("keydown", (event) => {
      if (event.key == "ArrowRight") {
        document.getElementById(count).style.display = "none";
        count++;
        document.getElementById(count).style.display = "block";
      }
    });
  });

  return (
    <div className="App">
      <div className="container">
        <div className="container2">
          <img src={pdf} width={460} />
          <div className="magnifyBox1" id="1"></div>
          <div className="magnifyBox2" id="2" style={{ display: "none" }}></div>
          <div className="magnifyBox3" id="3" style={{ display: "none" }}></div>
          <div className="magnifyBox4" id="4" style={{ display: "none" }}></div>
          <div className="magnifyBox5" id="5" style={{ display: "none" }}></div>
          <div className="magnifyBox6" id="6" style={{ display: "none" }}></div>
          <div className="magnifyBox7" id="7" style={{ display: "none" }}></div>
          <div className="magnifyBox8" id="8" style={{ display: "none" }}></div>
          <div className="magnifyBox9" id="9" style={{ display: "none" }}></div>
          <div
            className="magnifyBox10"
            id="10"
            style={{ display: "none" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default App;
