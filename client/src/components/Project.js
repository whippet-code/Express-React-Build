import { useState } from "react";

// import helper func
import customFetch from "../helperFunctions/customFetch";

import Form from "./Form";

//stylesheet
import "./componentStyles.css";

function Project(props) {
  // props - title, id, desc, url

  function handleClick(e) {
    // get the id for this project from the buttons grandparent
    const id = e.target.parentElement.parentElement.id;
    customFetch(e.target.value, id);
  }

  const [isEdit, setIsEdit] = useState(false);

  // toggle render of project / form to edit project
  function editProject() {
    setIsEdit((prevState) => (prevState = !prevState));
  }
  // conditional render project div OR if edit button clicked then display form with data taken from props
  return (
    <article id={props.id}>
      <h3>{props.title}</h3>
      <a href={props.url}>
        <h5>{props.url}</h5>
      </a>
      <hr></hr>
      <section>{props.description}</section>
      <section className="buttons">
        <button
          type="button"
          className="edit"
          value="POST"
          onClick={editProject}
        >
          Edit
        </button>
        <button
          type="button"
          className="delete"
          value="DELETE"
          onClick={handleClick}
        >
          Delete
        </button>
      </section>
      {isEdit ? (
        <Form
          id={props.id}
          title={props.title}
          desc={props.description}
          url={props.url}
        />
      ) : (
        ""
      )}
    </article>
  );
}

export default Project;
