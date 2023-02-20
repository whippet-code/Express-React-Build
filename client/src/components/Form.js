import { useState } from "react";

import "./componentStyles.css";

function Form(props) {
  // State for project info????? OR state to track method of call to make upon submit
  const [projectData, setProjectData] = useState({});

  function handleSubmit() {
    // get info from form and turn into project object
    // Can i just submit the call from here???? // Might need to track type of call update or new project
    // if not above then update state
    // make the call to api
  }

  return (
    <form className="Form">
      <label>Title</label>
      <input type="text" value={props.title}></input>
      <label>Link</label>
      <input type="url" value={props.url}></input>
      <label>Description</label>
      <textarea name="description">{props.desc}</textarea>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Form;
