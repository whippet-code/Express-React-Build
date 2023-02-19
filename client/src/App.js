import React from "react";
import { useEffect, useState } from "react";

import Project from "./components/Project";
import "./App.css";

function App() {
  const [data, setData] = useState(["Nothing Here Yet!"]);

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  function addProject() {
    console.log("Clicked!!!!!");
  }

  return (
    <div className="App">
      <div className="title">
        <h1>Web Projects Tracker</h1>
        <p>
          Tracker for web projects built during HyperionDev Bootcamp. This
          project was built for Task 54 - Express / React
        </p>
        <button type="button" onClick={addProject}>
          Add Project
        </button>
      </div>
      {data.map((project) => (
        <Project
          key={project.id}
          id={project.id}
          title={project.title}
          url={project.URL}
          desc={project.description}
        />
      ))}
    </div>
  );
}

export default App;
