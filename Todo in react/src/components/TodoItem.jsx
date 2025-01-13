import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div   onClick={() => onToggle(todo.id)} style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" ,height:"30px",width:"80vw",border:"1px solid black",padding:"10px",hover:"background-color:yellow",boxShadow:"5px 10px 18px #888888"}}>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
       
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
