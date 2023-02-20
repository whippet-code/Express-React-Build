import { useState } from "react";

// import helper function
import customFetch from "../helperFunctions/customFetch";

import "./componentStyles.css";

function Form(props) {
  // State for project info????? OR state to track method of call to make upon submit
  const [projectData, setProjectData] = useState({});

  // prevent default form action upon submitting
  const handleSubmit = (e) => {
    //e.preventDefault();
    // make the fetch call here using state obj as data
    const project = projectData;
    // create id for submitting call, or if it already had id (edit) use existing
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
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={projectData.title || ""}
        onChange={handleChange}
        required
      />
      <label>Link</label>
      <input
        type="url"
        name="url"
        value={projectData.url || ""}
        onChange={handleChange}
        required
      />
      <label>Description</label>
      <textarea
        name="description"
        value={projectData.description || ""}
        onChange={handleChange}
        required
      >
        {props.description}
      </textarea>
      <input className="formSubmit" type="submit" onClick={handleSubmit} />
    </form>
  );
}

export default Form;
