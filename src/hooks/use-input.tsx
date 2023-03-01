import { ChangeEvent, useState } from 'react';

const useInput = (validateValue: Function) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	const valueIsValid = validateValue(enteredValue);
	const hasError = !valueIsValid && isTouched;

	const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setEnteredValue(event.target.value);
	};

	const inputBlurHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setIsTouched(true);
	};

	const touchInputHandler = () => {
		setIsTouched(true);
	};

	const reset = () => {
		setEnteredValue('');
		setIsTouched(false);
	};

	return {
		value: enteredValue,
		hasError,
		isValid: valueIsValid,
		valueChangeHandler,
		inputBlurHandler,
		reset,
		touchInputHandler,
	};
};

export default useInput;
