import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList.jsx';

describe('TodoList.jsx Component', () => {
   test('renders the TodoList component', () => {
    render(<TodoList />);

    // Check if the header is rendered
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    
    // Simulate adding a new todo
    const input = screen.getByPlaceholderText('Add new todo');
    const button = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    // Check if the new todo is added to the list
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);

    // Find the first todo item and simulate clicking to toggle its completion
    const todoItem = screen.getByText('New Todo');
    fireEvent.click(todoItem);

    // Check if the todo item is marked as completed (class change or strikethrough)
    expect(todoItem).toHaveClass('completed'); // Assuming you add a 'completed' class when toggled
  });

  test('deletes a todo', () => {
    render(<TodoList />);

    // Simulate deleting the first todo
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    // Check if the todo item is removed from the list
    expect(screen.queryByText('New Todo')).not.toBeInTheDocument();
  });
});
