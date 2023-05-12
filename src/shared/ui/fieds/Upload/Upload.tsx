import React, { FC } from 'react';
import classes from './Upload.module.scss';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface IProps {
	id: string;
	className?: string;
	filled?: boolean;
	errors?: string;
}

const Upload: FC<IProps> = ({ id, className, filled, errors }) => {
	return (
		<fieldset className={`${className} ${classes.upload}`}>
			<input className={classes.upload__input} id={id} type="file" />
			<label
				className={`${classes.label} ${errors ? classes.label_error : ''}`}
				htmlFor={id}
			>
				<span
					className={`${classes.label__button} ${
						errors ? classes.label__button_error : ''
					}`}
				>
					Upload
				</span>
				<p
					className={`${classes.label__text} ${
						filled || errors ? classes.label__text_filled : ''
					} `}
				>
					Upload your photo
				</p>
			</label>
			{errors && <ErrorMessage message={errors} />}
		</fieldset>
	);
};

export default Upload;
