import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { todoListActions } from '../store/todolist-slice';
import Todo from '../models/Todo';
import Modal from './Modal';

import classes from './TodoListItem.module.css';

const TodoListItem: React.FC<Todo> = props => {
	const dispatch = useDispatch();
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const showModalHandler = () => {
		setModalIsVisible(true);
	};
	const hideModalHandler = () => {
		setModalIsVisible(false);
	};

	const changeItemStatusHandler = () => {
		dispatch(todoListActions.changeItemStatus(props.id));
	};

	return (
		<>
			{modalIsVisible && (
				<Modal onClose={hideModalHandler}>
					<h2 style={{ textAlign: 'center' }}>{props.title}</h2>
					<h3>Description:</h3>
					<p>{props.description}</p>
					<p>
						Status:{' '}
						<input
							type='checkbox'
							name='status'
							checked={props.completed}
							onChange={changeItemStatusHandler}
						/>
					</p>
					<br />
					<button onClick={hideModalHandler}>Close</button>
				</Modal>
			)}
			<div className={classes['todo-list__item']} key={props.id}>
				<div onClick={showModalHandler}>{props.id}</div>
				<div onClick={showModalHandler}>{props.title}</div>
				<div onClick={showModalHandler}>{props.description}</div>
				<div>
					<input
						type='checkbox'
						name='status'
						checked={props.completed}
						onChange={changeItemStatusHandler}
					/>
				</div>
			</div>
		</>
	);
};

export default TodoListItem;
