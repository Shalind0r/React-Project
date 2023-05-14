import React, { FC } from 'react';
import classes from './Upload.module.scss';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

interface IProps {
	id: string;
	className?: string;
	register: UseFormRegisterReturn;
	errors: FieldErrors;
	fileName: string;
}

const Upload: FC<IProps> = ({ id, className, errors, register, fileName }) => {
	const textCondition = fileName || (errors && errors[id]);
	return (
		<fieldset className={`${className} ${classes.upload}`}>
			<input {...register} className={classes.upload__input} id={id} type="file" />
			<label
				className={`${classes.label} ${
					errors && errors[id] ? classes.label_error : ''
				}`}
				htmlFor={id}
			>
				<span
					className={`${classes.label__button} ${
						errors && errors[id] ? classes.label__button_error : ''
					}`}
				>
					Upload
				</span>
				<p
					className={`${classes.label__text} ${
						textCondition ? classes.label__text_filled : ''
					} `}
				>
					{textCondition ? fileName : 'Upload your photo'}
				</p>
			</label>
			{errors && <ErrorMessage message={errors[id]?.message as string} />}
		</fieldset>
	);
};

export default Upload;
