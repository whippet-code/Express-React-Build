import "./componentStyles.css";

function Project(props) {
  // props - title, id, desc, url
  return (
    <article id={props.id}>
      <h3>{props.title}</h3>
      <a href={props.url}>
        <h5>{props.url}</h5>
      </a>
      <hr></hr>
      <section>{props.desc}</section>
      <section className="buttons">
        <button type="button" className="edit">
          Edit
        </button>
        <button type="button" className="delete">
          Delete
        </button>
      </section>
    </article>
  );
}

export default Project;
