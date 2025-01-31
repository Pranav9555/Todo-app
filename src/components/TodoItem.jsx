import { BiMessageAdd } from "react-icons/bi";

function TodoItem({ todoName, todoDate, onDeleteClick }) {

  return (
    <>
      <div className="container">
        <div className="row Pr-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>

          <div className="col-2">
            <button className="btn btn-danger Pr-btn" onClick={() => onDeleteClick(todoName)}><BiMessageAdd /></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;