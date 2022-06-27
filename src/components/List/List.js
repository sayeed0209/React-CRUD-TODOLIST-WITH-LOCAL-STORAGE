import React from 'react';
import { FaEdit, FaTrash, FaRegCheckCircle, FaRegCircle,FaRegTimesCircle } from 'react-icons/fa';
const List = ({
	todoList,
	editTodo,
	handleChnage,
	removeTodo,
	
}) => {
	return (
		<section>
			{todoList.map(todo => {
				const { id, title } = todo;
				return (
					<ul className="todolist-container" key={id}>
						<li>
							<label htmlFor={id} className="checkbox-label">
								{todo.completed ? (
									<FaRegCheckCircle className="icon" />
								) : (
									<FaRegCircle className="icon" />
								)}
							</label>
							<input
								className="checkbox"
								id={id}
								type="checkbox"
								checked={todo.completed}
								onChange={() => {
									handleChnage(id);
								}}
							/>
						</li>
						<li className={`todo-item ${todo.completed && 'completed'}`}>
							{title}
						</li>
						<li className="btn-container">
							<button
								className={`${
									todo.completed ? 'completed disable-btn' : 'edit-btn'
								}`}
								disabled={todo.completed}
							>
								{!todo.completed ? (
									<FaEdit className={`icon `} onClick={() => editTodo(id)} />
								) : 
									 <FaRegTimesCircle className="cross-btn" />
									
								}
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
