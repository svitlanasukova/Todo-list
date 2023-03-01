import React from 'react';

import TodoListItem from './TodoListItem';
import { TodoList as TodoListInterface } from '../store/todolist-slice';

import classes from './TodoList.module.css';

const TodoList: React.FC<TodoListInterface> = props => {
	return (
		<div className={classes['todo-list']}>
			<div className={classes['todo-list__header']}>
				<div>ID</div>
				<div>TITLE</div>
				<div>DESCRIPTION</div>
				<div>STATUS</div>
			</div>
			<div className={classes['todo-list__grid']}>
				{props &&
					props.items.map(item => (
						<TodoListItem
							id={item.id}
							title={item.title}
							description={item.description}
							completed={item.completed}
							key={item.id}
						/>
					))}
			</div>
		</div>
	);
};

export default TodoList;
