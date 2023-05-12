import React, { FC } from 'react';
import classes from './Input.module.scss';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import usePhoneInput from '../../../../hooks/usePhoneInput';

interface IProps {
	className?: string;
	errors?: string;
	type: 'phone' | 'name' | 'email';
	placeholder?: string;
	id: string;
}

const Input: FC<IProps> = ({ className, errors, type, placeholder, id }) => {
	// Custom hook with logic of behavior for phone input
	const { phoneProps } = usePhoneInput();

	return (
		<fieldset className={`${className} ${classes.input}`}>
			<input
				id={id}
				placeholder={placeholder}
				className={`${classes.input__item} ${
					errors ? classes.input__item_error : ''
				}`}
				{...(type === 'phone' && phoneProps)}
				type={type}
			/>
			<label
				className={`${classes.input__label} ${
					errors ? classes.input__label_error : ''
				}`}
				htmlFor={id}
			>
				{placeholder}
			</label>
			{type === 'phone' && (
				<p className={classes.input__help}>+38 (XXX) XXX - XX - XX</p>
			)}
			{errors && <ErrorMessage message={errors} />}
		</fieldset>
	);
};

export default Input;
