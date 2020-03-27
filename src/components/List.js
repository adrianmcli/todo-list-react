import React from 'react';

const List = ({ list, addTodo, setTitle, todoTitle }) => {
	const renderedList = list.map((item) => <li key={item}>{item}</li>);

	return (
		<>
			<ul>
				<form onSubmit={addTodo}>
					<input type="text" value={todoTitle} onChange={setTitle} />
					<input type="submit" value="Add" />
				</form>
				{renderedList}
			</ul>
		</>
	);
};

export default List;
