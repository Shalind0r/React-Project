import React, { FC } from 'react';
import classes from './RadioButton.module.scss';
import { UseFormRegisterReturn } from 'react-hook-form';
interface IProps {
	className?: string;
	id: string;
	name: string;
	text: string;
	onClick?: () => void;
	register?: UseFormRegisterReturn;
	value?: number;
}
const RadioButton: FC<IProps> = ({
	id,
	className,
	name,
	text,
	onClick,
	register,
	value,
}) => {
	return (
		<label
			onClick={onClick}
			className={`${classes.radioButton} ${className}`}
			htmlFor={id}
		>
			<input
				value={value}
				name={name}
				className={classes.radioButton__default}
				id={id}
				type="radio"
				{...register}
			/>
			<div className={classes.radioButton__radio}>
				<div></div>
			</div>
			<span className={classes.radioButton__text}>{text}</span>
		</label>
	);
};

export default RadioButton;
