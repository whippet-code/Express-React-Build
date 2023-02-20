import { useState } from "react";

import "./componentStyles.css";

function Form(props) {
  // State for project info????? OR state to track method of call to make upon submit
  const [projectData, setProjectData] = useState({});

  // prevent default form action upon submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(projectData);
  };

  // event handler to take form input and build state object
  const handleChange = (e) => {
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
      <input type="submit" />
      Submit
    </form>
  );
}

export default Form;
