// import helper func
import customFetch from "../helperFunctions/customFetch";

//stylesheet
import "./componentStyles.css";

function Project(props) {
  // props - title, id, desc, url

  function handleClick(e) {
    // get the id for this project from the buttons grandparent
    const id = e.target.parentElement.parentElement.id;
    customFetch(e.target.value, id);
  }

  return (
    <article id={props.id}>
      <h3>{props.title}</h3>
      <a href={props.url}>
        <h5>{props.url}</h5>
      </a>
      <hr></hr>
      <section>{props.desc}</section>
      <section className="buttons">
        <button
          type="button"
          className="edit"
          value="POST"
          onClick={handleClick}
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
    </article>
  );
}

export default Project;
