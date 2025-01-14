import React, { useState,useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };
  
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if(storedTodos){
      setTodos(storedTodos);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  });

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Todo App</h1>
       <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} /> 
    </div>
  );
};

export default App;
