import { useState } from "react";

import "./componentStyles.css";

function Form(props) {
  // State for project info????? OR state to track method of call to make upon submit
  const [projectData, setProjectData] = useState({});

  // prevent default form action upon submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    // make the fetch call here using state obj as data
    // need an id
    alert(projectData);
  };

  // event handler to take form input and build state object
  const handleChange = (e) => {
    // take input name & value for each and spread through the object with all the key value pairs (name:value) - effectivly build a new project object to submit in fetch call.
    const name = e.target.name;
    const value = e.target.value;
    setProjectData((values) => ({ ...values, [name]: value }));
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
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
