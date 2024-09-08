import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import TodoList from '../components/TodoList';

test('renders the TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText('Add new todo')).toBeInTheDocument();
  });
  
  test('adds a new todo', () => {
    render(<TodoList />);
  
    const input = screen.getByPlaceholderText('Add new todo');
    const addButton = screen.getByText('Add Todo');
  
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);
  
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });
  
  test('toggles todo completion', () => {
    render(<TodoList />);
  
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem); // Toggles the completion
  
    expect(todoItem).toHaveStyle('text-decoration: line-through'); // It should be completed now
  });
  
  test('deletes a todo', async () => {
    render(<TodoList />);
  
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]); // Simulate deleting the first todo
  
    await waitFor(() => {
      expect(screen.queryByText('Learn React')).not.toBeInTheDocument(); // Ensure it is removed from DOM
    });
  });