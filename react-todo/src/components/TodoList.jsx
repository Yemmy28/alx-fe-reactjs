import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Build a Todo App', completed: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={newTodo} 
        onChange={handleInputChange} 
        placeholder="Add new todo" 
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li 
            key={index} 
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
            onClick={() => toggleTodo(index)}
          >
            {todo.text}
            <button 
              onClick={(e) => { 
                e.stopPropagation(); // Prevent the toggle from firing when clicking Delete
                deleteTodo(index); 
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;