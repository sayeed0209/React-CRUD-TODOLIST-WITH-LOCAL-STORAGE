import React, { useState, useEffect } from 'react';
import List from './components/List/List';
import Alert from './components/Alert/Alert';
const App = () => {
	const [todo, setTodo] = useState('');
	const [todoList, setTodoList] = useState([]);
	const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
	const [isEditing, setIsEditing] = useState(false);
	const [editId, setEditId] = useState(null);
	const submitHandler = e => {
		e.preventDefault();

		if (todo.length === 0 || todo.trim().length < 0) {
			setAlert({ show: true, msg: 'please enter a todo', type: 'danger' });
		} else if (todo && isEditing) {
			// will edit
			const updateTodo = todoList.map(todoItem => {
				if (todoItem.id === editId) {
					return { ...todoItem, title: todo };
				}
				return todoItem;
			});
			setTodoList(updateTodo);
			setTodo('');
			setEditId(null);
			setIsEditing(false);
			setAlert({ show: true, type: 'success', msg: 'Updated Successfully' });
		} else {
			const newTodo = {
				id: new Date().getTime().toString(),
				title: todo,
				completed: false,
			};
			setTodoList([...todoList, newTodo]);
			setAlert({ show: true, msg: 'Todo added successfully', type: 'success' });
			setTodo('');
		}
	};
	const hideAlert = () => {
		setAlert({ show: false });
	};
	const editTodo = id => {
		const todoItem = todoList.find(item => item.id === id);
		setIsEditing(true);
		setEditId(id);
		setTodo(todoItem.title);
	};
	const handleChnageCheckbox = id => {
		const newTodo = todoList.map(todoItem => {
			if (todoItem.id === id) {
				return { ...todoItem, completed: !todoItem.completed };
			}
			return todoItem;
		});
		setTodoList(newTodo);
	};
	const removeTodo = todoId => {
		const filterList = todoList.filter(item => item.id !== todoId);
		setTodoList(filterList);
		setAlert({
			show: true,
			type: 'danger',
			msg: 'todo item deleted succesfully',
		});
	};
	const clearAllTodo = () => {
		setTodoList([]);
		setAlert({ show: true, type: 'danger', msg: 'clear all todo succesfully' });
	};

	return (
		<main>
			<section className="section-center">
				<h1>todo list</h1>
				<form onSubmit={submitHandler}>
					{alert.show && <Alert {...alert} hideAlert={hideAlert} />}
					<div className="form-control">
						<input
							type="text"
							name="todo"
							id="todo"
							className="todoInput"
							placeholder="Add todo"
							onChange={e => setTodo(e.target.value)}
							value={todo}
						/>
						<button className="submit-btn">
							{isEditing ? 'edit' : 'addtodo'}
						</button>
					</div>
				</form>
				{todoList.length > 0 && (
					<div>
						<List
							todoList={todoList}
							editTodo={editTodo}
							handleChnage={handleChnageCheckbox}
							removeTodo={removeTodo}
						/>
						<button className="clear-btn" onClick={clearAllTodo}>
							clear all
						</button>
					</div>
				)}
			</section>
		</main>
	);
};

export default App;
