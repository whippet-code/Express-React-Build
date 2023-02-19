import "./componentStyles.css";

function Form(props) {
  return (
    <form className="Form">
      <label>Title</label>
      <input type="text" value={props.title}></input>
      <label>Link</label>
      <input type="url" value={props.url}></input>
      <label>Description</label>
      <textarea name="description">{props.desc}</textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
