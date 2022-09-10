import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is created by Olha Sidelnikova ans is open-sourced on{" "}
          <a href="https://github.com/olivkasid/weather-react">GitHub</a>
        </footer>
      </div>
    </div>
  );
}
