import React, { FC, ReactNode } from 'react';
import classes from './ButtonAction.module.scss';

interface IProps {
	disabled?: boolean;
	className?: string;
	onClick?: () => void;
	children: ReactNode;
}
const ButtonAction: FC<IProps> = ({ disabled, className, onClick, children }) => {
	return (
		<button
			onClick={onClick}
			className={
				disabled
					? ` ${className} ${classes.button} ${classes.button_disabled}`
					: `${className} ${classes.button}`
			}
		>
			{children}
		</button>
	);
};

export default ButtonAction;
