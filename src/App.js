import React, { useState, useEffect } from 'react';
import List from './components/List';

let iList = [
	{
		task: 'Buy water',
		date: '-',
		importance: 'High'
	},
	{
		task: 'Buy food',
		date: '-',
		importance: 'Low'
	},
	{
		task: 'Feed cat',
		date: '-',
		importance: 'High'
	}
];

const App = () => {
	const [list, setList] = useState(iList);
	const [todoTitle, setTodoTitle] = useState('');

	useEffect(() => setList(list), []);

	const setTitle = (event) => {
		setTodoTitle(event.target.value);
	};

	const addTodo = (event) => {
		event.preventDefault();
		const newTodo = {
			task: todoTitle,
			date: new Date().toDateString(),
			importance: 'Low'
		};
		setList(list.concat(newTodo));
		setTodoTitle('');
	};

	return (
		<div>
			<List
				list={list}
				addTodo={addTodo}
				todoTitle={todoTitle}
				setTitle={setTitle}
			/>
		</div>
	);
};

export default App;
