import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const initialToDoItems = [
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

  const [toDoItems, setToDoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    const newToDoItems = [
      ...toDoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setToDoItems(newToDoItems);
  };

  const handleDeleteItem = (toDoItemName) => {
    const newToDoItems = toDoItems.filter((item) => item.name !== toDoItemName);
    setToDoItems(newToDoItems);
    console.log(`Item Deleted: ${toDoItemName}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      {toDoItems.length === 0 && <WelcomeMessage />}
      <ToDoItems toDoItems={toDoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
