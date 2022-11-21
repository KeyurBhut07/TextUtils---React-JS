// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// //import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  //Theme State
  const [mode, srtMode] = useState("light"); // dark mode is enable or not

  // alert atate
  const [alert, setalert] = useState(null);

  // show alert fun
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  // Enable Dark Theeme
  const toggleMode = () => {
    if (mode === "light") {
      srtMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Is Enable.", "success");
      // document.title = "TextUtils - Dark Mode"; - Show Tittle
    } else {
      srtMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Is Enable.", "success");
      // document.title = " TextUtils - Light Mode"; - show tittle

      // You Can Genrate Error
      // setInterval(() => {
      //   showAlert("TextUtils Is Amezing ", "success");
      // }, 5000);

      // setInterval(() => {
      //   showAlert("TextUtils Install Now ", "warning ");
      // }, 2500);
    }
  };

  return (
    <>
      {/* Called The Components From Component Folder - File Name Is Navbar */}
      {/* <Navbar /> */}

      <Navbar tittle="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>

      <div className="container my-3">
        <TextForms
          showAlert={showAlert}
          heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Space"
          mode={mode}
        />
        {/*   <About /> */}
      </div>
    </>
  );
}

export default App;
