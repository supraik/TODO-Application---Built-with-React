import React, { useState } from "react";

const TodoInput = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() !== "") {
      onAddTodo(text.trim());
      setText("");
    }
  };

  const handleKeyPress = (e) => {
    console.log(e.key);
    if(e.key=="Enter"){
      handleAdd();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;