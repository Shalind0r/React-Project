import React, { FC } from 'react';
import classes from './ErrorMessage.module.scss';

const ErrorMessage: FC<{ message: string; className?: string }> = ({
	message,
	className,
}) => {
	return <p className={`${classes.message} ${className}`}>{message}</p>;
};

export default ErrorMessage;
