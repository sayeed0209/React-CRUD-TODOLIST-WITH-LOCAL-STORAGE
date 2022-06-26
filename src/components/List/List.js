import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ todoList, editTodo, handleChnage, removeTodo }) => {
	return (
		<section>
			{todoList.map(todo => {
				const { id, title } = todo;
				return (
					<ul className="todolist-container" key={id}>
						<li>
							<input
								type="checkbox"
								checked={todo.completed}
								onChange={() => {
									handleChnage(id);
								}}
							/>
						</li>
						<li
							className="todo-item"
							style={{ textDecoration: todo.completed ? 'line-through' : '' }}
						>
							{title}
						</li>
						<li className="btn-container">
							<button className="edit-btn">
								<FaEdit className="icon" onClick={() => editTodo(id)} />
							</button>
							<button className="delete-btn" onClick={() => removeTodo(id)}>
								<FaTrash className="icon" />
							</button>
						</li>
					</ul>
				);
			})}
		</section>
	);
};

export default List;
