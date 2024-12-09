import { useRef } from "react";

function AddToDo({ onNewItem }) {
  // const [toDoName, setToDoName] = useState("");
  // const [dueDate, setDueDate] = useState("");

  const toDoNameElement = useRef();
  const toDoDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setToDoName(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleAddButtonClicked = (event) => {
    console.log(event);
    event.preventDefault();
    const toDoName = toDoNameElement.current.value;
    const dueDate = toDoDateElement.current.value;
    toDoNameElement.current.value = "";
    toDoDateElement.current.value = "";
    onNewItem(toDoName, dueDate);
    // setDueDate("");
    // setToDoName("");
  };

  return (
    <div className="container">
      <form className="row md-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={toDoNameElement}
            placeholder="Enter todo here"
            // onChange={handleNameChange}
            // value={toDoName}
          />
        </div>
        <div className="col-4">
          <input
            ref={toDoDateElement}
            type="date"
            // onChange={handleDateChange}
            // value={dueDate}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success md-button">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
