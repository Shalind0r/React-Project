import React, { FC, useEffect, useRef, useState } from 'react';
import classes from './WorkingWithPost.module.scss';
import PostForm from '../../feature/PostForm/PostForm';
import image from '../../shared/static/images/success-image.svg';

import { CSSTransition } from 'react-transition-group';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { IForm } from '../../shared/types/IPost';
import { IPositions } from '../../shared/types/IPositions';

interface IProps {
	className: string;
	status: boolean;
	error: string;
	onSubmit: (data: IForm) => void;
	positions: IPositions[];
}
const WorkingWithPost: FC<IProps> = ({
	className,
	status,
	error,
	onSubmit,
	positions,
}) => {
	const [minHeight, setMinHeight] = useState('');
	const formRef = useRef<HTMLDivElement>(null);
	const successRef = useRef<HTMLDivElement>(null);

	// fix container width in position absolute in animation
	useEffect(() => {
		!status && setMinHeight(`${formRef.current?.scrollHeight ?? 741}px`);
		status && setMinHeight(`${successRef.current?.scrollHeight ?? 377}px`);
	}, [status]);

	const fadeClassNames = {
		enter: 'fadeEnter',
		enterActive: 'fadeEnterActive',
		exit: 'fadeExit',
		exitActive: 'fadeExitActive',
	};

	return (
		<div
			id={'sign-up'}
			style={{ minHeight: minHeight }}
			className={`${className}  `}
		>
			<CSSTransition
				in={!status}
				classNames={fadeClassNames}
				timeout={500}
				unmountOnExit={true}
			>
				<div ref={formRef} className={classes.workingWithPost}>
					<h1 className={classes.title}>Working with POST request</h1>
					<div className={classes.workingWithPost__wrapper}>
						<PostForm
							error={error}
							onSubmit={onSubmit as SubmitHandler<FieldValues>}
							positions={positions}
						/>
					</div>
				</div>
			</CSSTransition>

			<CSSTransition
				in={status}
				classNames={fadeClassNames}
				mountOnEnter={true}
				timeout={500}
			>
				<div ref={successRef} className={classes.workingWithPost}>
					<h1 className={classes.title}>User successfully registered</h1>
					<div className={classes.workingWithPost__wrapper}>
						<img src={image} alt={'success'} />
					</div>
				</div>
			</CSSTransition>
		</div>
	);
};

export default WorkingWithPost;
