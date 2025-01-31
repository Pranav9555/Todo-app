import { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri"
function AddTodo({ NewItem }) {

  let [todoName, setTodoName] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }
  let [TodoDate, setTodoDate] = useState();

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  }

  let handleAddButtonClicked = () => {
    NewItem(todoName, TodoDate);
    setTodoName("");
    setTodoDate("");
  }
  return (

    <div className="container text-center">
      <div className="row Pr-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo" value={todoName} onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={TodoDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button className="btn btn-success Pr-btn"
            onClick={handleAddButtonClicked}>
            <RiAddCircleLine />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;