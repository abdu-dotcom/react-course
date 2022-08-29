// nama function harus diawalin huruf besar
function Todo(props) {

  const buttonDelete = () => { 
    console.log("Click botton" + props.number);
    console.log(props.text);
    console.log(props.description);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={buttonDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
