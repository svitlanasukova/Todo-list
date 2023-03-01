import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { todoListActions, TodoListItem } from './store/todolist-slice';

import { TodoList as TodoListInterface } from './store/todolist-slice';

function App() {
	const dispatch = useDispatch();

	const todoList = useSelector<TodoListInterface, TodoListInterface['items']>(
		state => state.items,
	);

	const cons = (val: TodoListItem) => {
		const id = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;
		dispatch(
			todoListActions.addItem({
				id: id,
				title: val.title,
				description: val.description,
				completed: false,
			}),
		);
	};
	return (
		<>
			<TodoForm onAddTodo={cons} />
			<TodoList items={todoList} />
		</>
	);
}

export default App;
