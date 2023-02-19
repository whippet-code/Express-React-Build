import React from "react";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState(["Nothing Here Yet!"]);

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      {data.map((project) => {
        return (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <h3>{project.description}</h3>
            <a href={project.URL}>
              <h4>{project.URL}</h4>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default App;
