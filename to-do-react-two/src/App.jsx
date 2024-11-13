import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
function App() {
  const toDoItems = [
    {
      name: "Buy Milk",
      dueDate: "12/11/2024",
    },
    {
      name: "Go to College",
      dueDate: "14/11/2024",
    },
    {
      name: "Do my work",
      dueDate: "20/11/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <ToDoItems toDoItems={toDoItems} />
    </center>
  );
}

export default App;
