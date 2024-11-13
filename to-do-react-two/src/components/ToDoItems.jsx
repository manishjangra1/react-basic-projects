import ToDoItem from "./ToDoItem";
const ToDoItems = ({toDoItems}) =>{
    return <>
        <div className="items-container">
            {toDoItems.map(item => <ToDoItem toDoName={item.name} toDoDate={item.dueDate} key={item.name}/>)}
        {/* <ToDoItem toDoName={toDoItems.name} toDoDate="08/11/2024" />
        <ToDoItem toDoName="Go To College" toDoDate="10/11/2024" /> */}
      </div>
    </>
}

export default ToDoItems;