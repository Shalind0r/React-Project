import React, { FC } from 'react';
import classes from './RadioButton.module.scss';
interface IProps {
	className?: string;
	id: string;
	name: string;
	text: string;
}
const RadioButton: FC<IProps> = ({ id, className, name, text }) => {
	return (
		<label className={`${classes.radioButton} ${className}`} htmlFor={id}>
			<input
				name={name}
				className={classes.radioButton__default}
				id={id}
				type="radio"
			/>
			<div className={classes.radioButton__radio}>
				<div></div>
			</div>
			<span className={classes.radioButton__text}>{text}</span>
		</label>
	);
};

export default RadioButton;
