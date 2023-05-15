import React, { FC } from 'react';
import { IUsers } from '../../shared/types/IUsers';
import classes from './UserCard.module.scss';
import imageCover from '../../shared/static/images/photo-cover.svg';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const UserCard: FC<{ data: IUsers }> = ({ data }) => {
	return (
		<div className={classes.userCard}>
			<img
				width={70}
				height={70}
				className={classes.userCard__image}
				src={data.photo ? data.photo : imageCover}
				alt="User"
				onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
					e.currentTarget.onerror = null;
					e.currentTarget.src = imageCover;
				}}
			/>
			<p
				data-tooltip-id={data.name}
				data-tooltip-content={data.name}
				className={classes.userCard__name}
			>
				{data.name}
			</p>
			<Tooltip className={'tooltip'} id={data.name} />
			<p className={classes.userCard__position}>{data.position}</p>
			<p
				data-tooltip-id={data.email}
				data-tooltip-content={data.email}
				className={classes.userCard__email}
			>
				{data.email}
			</p>
			<Tooltip className={'tooltip'} id={data.email} />
			<p className={classes.userCard__phone}>{data.phone}</p>
		</div>
	);
};

export default UserCard;
