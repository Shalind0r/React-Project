import React, { FC, ReactNode } from 'react';
import classes from './ButtonAction.module.scss';
import { Link } from 'react-scroll';

interface IProps {
	disabled?: boolean;
	className?: string;
	onClick?: () => void;
	children: ReactNode;
	type: 'button' | 'link';
	to?: string;
}
const ButtonAction: FC<IProps> = (props) => {
	return props.type === 'button' ? (
		<button
			onClick={props.onClick}
			className={` ${props.className} ${classes.button} ${
				props.disabled ? classes.button_disabled : ''
			}`}
		>
			{props.children}
		</button>
	) : (
		<Link
			className={` ${props.className} ${classes.button}`}
			to={props.to as string}
			smooth={true}
			offset={-50}
		>
			{props.children}
		</Link>
	);
};

export default ButtonAction;
