import React, { FC } from 'react';
import classes from './Header.module.scss';
import ButtonAction from '../../shared/ui/buttons/ButtonAction/ButtonAction';
import { ReactComponent as LogoIcon } from '../../shared/static/icons/Logo.svg';

const Header: FC<{ className?: string }> = ({ className }) => {
	return (
		<header className={`${className} ${classes.wrapper}`}>
			<div className={`${classes.header} container`}>
				<LogoIcon />
				<div className={classes.header__buttons}>
					<ButtonAction type={'link'} to={'users'}>
						Users
					</ButtonAction>
					<ButtonAction type={'link'} to={'sign-up'}>
						Sign up
					</ButtonAction>
				</div>
			</div>
		</header>
	);
};

export default Header;
