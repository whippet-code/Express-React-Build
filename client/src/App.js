import React from "react";
import { useEffect, useState } from "react";

// import helper func
import customFetch from "./helperFunctions/customFetch";

// import Components
import Project from "./components/Project";
import Form from "./components/Form";

// Stylesheet
import "./App.css";

function App() {
  // State to hold data from fetch call
  const [data, setData] = useState(["Nothing Here Yet!"]);

  // THe fetch call for initial data for load (will only call once on initial render)
  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [customFetch]);

  // state for add project form
  const [isAddProject, setAddProject] = useState(false);

  function addProject() {
    setAddProject((prevState) => (prevState = !prevState));
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
      {isAddProject ? <Form /> : <hr></hr>}

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
    </div>
  );
}

export default App;
