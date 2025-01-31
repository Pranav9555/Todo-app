import TodoItem from "./TodoItem";

function TodoItems({ FoodItems, onDeleteClick }) {
   return (
      <>
         {FoodItems.map((item) => (
            <TodoItem todoName={item.name} todoDate={item.duedate} onDeleteClick={onDeleteClick}></TodoItem>
         ))}
      </>
   );
}

export default TodoItems;