import React from "react";
import { useEffect, useState } from "react";

import Project from "./components/Project";
import Form from "./components/Form";
import "./App.css";

function App() {
  // State to hold data from fetch call
  const [data, setData] = useState(["Nothing Here Yet!"]);
  // THe fetch call for initial data for load (will only call once on initial render)
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
      {/* map the data to return a Project comp for each object in arr */}
      {data.map((project) => (
        <Project
          key={project.id}
          id={project.id}
          title={project.title}
          url={project.URL}
          desc={project.description}
        />
      ))}
      <Form
        title="Web Project"
        url="www.bangphoto.co.uk"
        desc="Portfolio build for professional portrait photographer"
      />
    </div>
  );
}

export default App;
