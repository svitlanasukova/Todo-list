import { configureStore } from '@reduxjs/toolkit';

import todoListReducer from './todolist-slice';

const store = configureStore({
	reducer: todoListReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
