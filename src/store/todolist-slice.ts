import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TodoListItem = {
	id: number;
	title: string;
	description: string;
	completed: boolean;
};

export interface TodoList {
	items: TodoListItem[];
}

const initialTodoListState: TodoList = {
	items: [],
};

const todoListSlice = createSlice({
	name: 'todoList',
	initialState: initialTodoListState,
	reducers: {
		addItem(state: TodoList, action: PayloadAction<TodoListItem>) {
			state.items.push(action.payload);
		},
		changeItemStatus(state: TodoList, action: PayloadAction<number>) {
			const item = state.items.find(item => item.id === action.payload);
			if (item) item.completed = !item.completed;
		},
	},
});

export default todoListSlice.reducer;

export const todoListActions = todoListSlice.actions;
