import useInput from '../hooks/use-input';

import classes from './TodoForm.module.css';

const isNotEmpty: Function = (value: string) => value.trim() !== '';
const TodoForm: React.FC<{
	onAddTodo: (val: { title: string; description: string }) => void;
}> = props => {
	console.log('render TodoForm');
	const {
		value: enteredTitle,
		isValid: enteredTitleIsValid,
		hasError: titleInputHasError,
		valueChangeHandler: titleChangedHandler,
		inputBlurHandler: titleBlurHandler,
		reset: resetTitleInput,
		touchInputHandler: touchTitleInputHandler,
	} = useInput(isNotEmpty);
	const {
		value: enteredDescription,
		isValid: enteredDescriptionIsValid,
		hasError: descriptionInputHasError,
		valueChangeHandler: descriptionChangedHandler,
		inputBlurHandler: descriptionBlurHandler,
		reset: resetDescriptionInput,
		touchInputHandler: touchDescriptionInputHandler,
	} = useInput(isNotEmpty);

	let formIsValid: boolean = false;

	if (enteredTitleIsValid && enteredDescriptionIsValid) {
		formIsValid = true;
	}

	const todoFormSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		if (!formIsValid) {
			touchTitleInputHandler();
			touchDescriptionInputHandler();
			return;
		}

		props.onAddTodo({
			title: enteredTitle,
			description: enteredDescription,
		});

		// console.log(enteredTitle, enteredDescription);

		resetTitleInput();
		resetDescriptionInput();
	};

	return (
		<form className={classes['todo-form']} onSubmit={todoFormSubmitHandler}>
			<div className={classes['form-control']}>
				<label htmlFor='title'>Title:</label>
				<input
					type='text'
					id='title'
					placeholder='Enter title'
					onChange={titleChangedHandler}
					value={enteredTitle}
					onBlur={titleBlurHandler}
					className={titleInputHasError ? classes.invalid : ''}
				/>
				{titleInputHasError && (
					<p className={classes.error}>Title field is empty.</p>
				)}
			</div>
			<div className={classes['form-control']}>
				<label htmlFor='description'>Description:</label>
				<input
					type='text'
					id='description'
					placeholder='Enter description'
					onChange={descriptionChangedHandler}
					value={enteredDescription}
					onBlur={descriptionBlurHandler}
					className={descriptionInputHasError ? classes.invalid : ''}
				/>
				{descriptionInputHasError && (
					<p className={classes.error}>Description field is empty.</p>
				)}
			</div>
			<button type='submit'>Create</button>
		</form>
	);
};

export default TodoForm;
