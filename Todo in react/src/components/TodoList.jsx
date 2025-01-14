import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <div onclick={onToggle} style={{ display: "flex", flexDirection: "column", alignItems: "center" ,hover:"background-color:yellow"}}>

      {todos.length === 0 ? (
        <p>No tasks yet! Add one.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
      
    </div>
  );
};

export default TodoList;
