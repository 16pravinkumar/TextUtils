import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./assets/components/Navbar";
import { TextArea } from "./assets/components/TextArea";
import { useState } from "react";
import Alerts from "./assets/components/Alerts";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./assets/components/About";

let App = () => {
  let [mode, setMode] = useState("light");
  let [alert, setAlert] = useState(null);



  let showAlert = (message, type) => {
    setAlert({ message: message, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let toogleDarkLightMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtils DarkMode"
      showAlert("Dark Mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils LightMode"

      showAlert("Light Mode is enabled", "success");
    }
  };

  return (
    <>
      <Router>
  

        <Navbar
          title="TextUtils"
          mode={mode}
          toogleMode={toogleDarkLightMode}
        />
        <Alerts alert={alert} />

        <div className="container my-4 ">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TextArea
                    heading="Enter the text to analyze below"
                    mode={mode}
                    showAlert={showAlert}
                  />
                </>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <>
                  <About mode={mode}  />
                </>
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
