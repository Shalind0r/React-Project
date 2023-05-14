import React, { FC } from 'react';
import classes from './WorkingWithGET.module.scss';
import UserCard from '../../entiries/UserCard/UserCard';
import ButtonAction from '../../shared/ui/buttons/ButtonAction/ButtonAction';
import { IUsers } from '../../shared/types/IUsers';
import { CSSTransition } from 'react-transition-group';
import ClipLoader from 'react-spinners/ClipLoader';

interface IProps {
	className?: string;
	users: IUsers[];
	loading: boolean;
	nextPage: () => void;
	disabled: boolean;
}

const WorkingWithGet: FC<IProps> = ({
	className,
	users,
	loading,
	nextPage,
	disabled,
}) => {
	return (
		<div id={'users'} className={`${classes.workingWithGet} ${className} `}>
			<h2 className={classes.workingWithGet__title}>Working with GET request</h2>
			<div className={`${classes.workingWithGet__users} container`}>
				{loading ? (
					<div className={classes.loader}>
						<ClipLoader
							color={'#00BDD3'}
							loading={loading}
							size={150}
							cssOverride={{ borderWidth: '5px' }}
						/>
					</div>
				) : (
					users.map((data: IUsers) => <UserCard key={data.id} data={data} />)
				)}
			</div>

			{!disabled && (
				<CSSTransition
					in={!disabled}
					timeout={500}
					classNames={{
						enter: 'fadeEnter',
						enterActive: 'fadeEnterActive',
						exit: 'fadeExit',
						exitActive: 'fadeExitActive',
					}}
					unmountOnExit
					mountOnEnter
				>
					<ButtonAction
						type={'button'}
						className={classes.workingWithGet__button}
						onClick={nextPage}
					>
						Show more
					</ButtonAction>
				</CSSTransition>
			)}
		</div>
	);
};

export default WorkingWithGet;
