import React, { useState } from 'react';
import List from './components/List';

const App = () => {
	const [list, setList] = useState(['Buy water', 'Buy food', 'Feed cat']);
	const [todoTitle, setTodoTitle] = useState('');

	const setTitle = (event) => {
		setTodoTitle(event.target.value);
	};

	const addTodo = (event) => {
		event.preventDefault();
		setList(list.concat(todoTitle));
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
