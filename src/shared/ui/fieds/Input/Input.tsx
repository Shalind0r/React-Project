import React, { FC } from 'react';
import classes from './Input.module.scss';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

interface IProps {
	className?: string;
	errors?: FieldErrors;
	type: 'phone' | 'name' | 'email';
	placeholder?: string;
	id: string;
	register?: UseFormRegisterReturn;
	maxLength?: string;
}

const Input: FC<IProps> = ({ className, errors, type, placeholder, id, register }) => {
	return (
		<fieldset className={`${className} ${classes.input}`}>
			<input
				maxLength={type === 'phone' ? 13 : undefined}
				{...register}
				id={id}
				placeholder={placeholder}
				className={`${classes.input__item} ${
					errors && errors[id] ? classes.input__item_error : ''
				}`}
				type={'text'}
			/>
			<label
				className={`${classes.input__label} ${
					errors && errors[id] ? classes.input__label_error : ''
				}`}
				htmlFor={id}
			>
				{placeholder}
			</label>
			{type === 'phone' && (
				<p className={classes.input__help}>+380 XXX XX - XX - XX</p>
			)}
			{errors && errors[id] && (
				<ErrorMessage message={errors[id]?.message as string} />
			)}
		</fieldset>
	);
};

export default Input;
