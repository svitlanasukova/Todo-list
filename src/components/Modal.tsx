import { Fragment, MouseEventHandler, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop: React.FC<{
	onClose: MouseEventHandler;
}> = props => {
	return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay: React.FC<{ children: ReactNode }> = props => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const protalElement = document.getElementById('ovarlays') as HTMLElement;

const Modal: React.FC<{
	onClose: MouseEventHandler;
	children: ReactNode;
}> = props => {
	console.log('render modal');
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClose={props.onClose} />,
				protalElement,
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				protalElement,
			)}
		</Fragment>
	);
};

export default Modal;
