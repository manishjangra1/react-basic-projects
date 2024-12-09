import { useState } from "react";

function AddToDo({ onNewItem }) {
  const [toDoName, setToDoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(toDoName, dueDate);
    setDueDate("");
    setToDoName("");
  };

  return (
    <div className="container">
      <div className="row md-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            onChange={handleNameChange}
            value={toDoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success md-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
