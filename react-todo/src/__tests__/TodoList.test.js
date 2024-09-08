import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText('Add new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    // Verify that 'New Todo' is now in the document
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);

    // Check if the todo item is marked as completed (strikethrough or similar)
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);

    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]); // Simulate deleting the first todo

    // Check if the first todo is removed from the list
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});

