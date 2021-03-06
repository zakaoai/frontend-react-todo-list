import React, { useState } from 'react';
import useTodosList from '../customHooks/useTodosList';

// Composant de TodoApp
import UndoneLeft from '../components/UndoneLeft';
import TodosList from '../components/TodosList.jsx';
import TodoForm from '../components/TodoForm.jsx';

/**
 * Composant représentant une Todo List
 */
export default function TodoApp() {
	const { doneTodos, doingTodos, addTodo, deleteTodo, moveTodo } = useTodosList();

	return (
		<div className="row">
			<div className="col-md-6">
				<div className="todolist">
					<TodoForm addTodo={addTodo} />
					<br />
					<TodosList todos={doingTodos} id="not-done" moveOnClick={moveTodo} />

					{doingTodos.length !== 0 && <UndoneLeft undoneQuantity={doingTodos.length} />}
				</div>
			</div>

			<div className="col-md-6">
				<TodosList todos={doneTodos} id="done-items" moveOnClick={moveTodo} deleteOnClick={deleteTodo} />
			</div>
		</div>
	);
}
