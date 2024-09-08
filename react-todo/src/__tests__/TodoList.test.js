import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders the initial todo list', () => {
  const { getByText } = render(<TodoList />);
  expect(getByText('Learn React')).toBeInTheDocument();
  expect(getByText('Build a Todo App')).toBeInTheDocument();
});

test('can add a new todo', () => {
  const { getByText, getByPlaceholderText } = render(<TodoList />);
  const input = getByPlaceholderText('Add new todo...');
  const button = getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(getByText('New Todo')).toBeInTheDocument();
});

test('can toggle a todo', () => {
  const { getByText } = render(<TodoList />);
  const todo = getByText('Learn React');

  fireEvent.click(todo);

  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('can delete a todo', () => {
  const { getByText, queryByText } = render(<TodoList />);
  const todo = getByText('Learn React');
  const deleteButton = todo.nextSibling;

  fireEvent.click(deleteButton);

  expect(queryByText('Learn React')).toBeNull();
});
