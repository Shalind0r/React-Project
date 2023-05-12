import React, { FC } from 'react';
import classes from './ErrorMessage.module.scss';

const ErrorMessage: FC<{ message: string }> = ({ message }) => {
	return <p className={classes.message}>{message}</p>;
};

export default ErrorMessage;
