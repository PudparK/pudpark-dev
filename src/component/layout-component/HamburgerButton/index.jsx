import React, { useState } from 'react';
import styles from './styles.module.css';

const HamburgerButton = ({ onClick, isOpen }) => {
	const [ initialState, setInitialState ] = useState(false);

	const _onClick = (e) => {
		onClick(e);
		setInitialState(true);
	};

	const isNotToggled = initialState ? styles.isNotToggled : '';

	return (
		<div
			className={
				'block lg:hidden ' +
				styles.HamburgerButton +
				' ' +
				(isOpen ? styles.isToggled : isNotToggled) +
				' noSelect'
			}
			onClick={_onClick}
		>
			<span />
			<span />
			<span />
		</div>
	);
};

export default HamburgerButton;
