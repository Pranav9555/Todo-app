import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import "./App.css";
function App() {


  let [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (todoName, TodoDate) => {
    const newTodoItems = [...todoItems, { name: todoName, duedate: TodoDate }];
    setTodoItems(newTodoItems);
  }

  const handleDeleteBtn = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoName);

    setTodoItems(newTodoItems);
  }

  return (
    <center>
      <AppName></AppName>
      <AddTodo NewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && "enjoy your day"}
      <TodoItems FoodItems={todoItems} onDeleteClick={handleDeleteBtn}></TodoItems>
    </center>
  );
}

export default App;