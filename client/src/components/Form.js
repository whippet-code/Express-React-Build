import { useState } from "react";

// import helper function
import customFetch from "../helperFunctions/customFetch";

import "./componentStyles.css";

// Create one form for both creating new projects and updating existing.

function Form(props) {
  // State for project info????? OR state to track method of call to make upon submit
  const [projectData, setProjectData] = useState({});

  // prevent default form action upon submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    // make the fetch call here using state obj as data
    const project = projectData;
    // create id for submitting call, or if it already has id (this is an edit) use existing
    const id = props.id ? props.id : new Date().toJSON();
    project.id = id;
    // make the call (method / Data)
    // conditional depending upon if this is a PUT or PATCH (create or edit)
    customFetch(props.id ? "PATCH" : "PUT", JSON.stringify(project));
  };

  // event handler to take form input and build state object
  const handleChange = (e) => {
    // take input name & value for each and spread through the object with all the key value pairs (name:value) - effectivly build a new project object to submit in fetch call.
    const name = e.target.name;
    const value = e.target.value;
    const newProject = (values) => ({ ...values, [name]: value });
    // update state
    setProjectData(newProject);
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      {/* hidden input to set project id */}
      <input type="hidden" name="id" value={props.id} />
      <label>
        Title
        <input
          type="text"
          name="title"
          value={projectData.title || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Link
        <input
          type="url"
          name="url"
          value={projectData.url || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Description
        <textarea
          name="description"
          value={projectData.description || ""}
          onChange={handleChange}
        ></textarea>
      </label>
      <input type="submit" onClick={handleSubmit} />
    </form>
  );
}

export default Form;
