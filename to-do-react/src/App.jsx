import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDOItem1 from "./components/ToDoItem1";
import ToDOItem2 from "./components/ToDoItem2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddToDo />
      <div class="items-container">
      <ToDOItem1 />
      <ToDOItem2 />
      </div>
      
    </center>
  );
}

export default App;
