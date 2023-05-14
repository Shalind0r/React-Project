import React, { FC } from 'react';
import ButtonAction from '../../shared/ui/buttons/ButtonAction/ButtonAction';
import classes from './ImageText.module.scss';

const ImageText: FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={`${classes.imageText} ${className}`}>
			<h1 className={classes.imageText__title}>
				Test assignment for front-end developer
			</h1>
			<p className={classes.imageText__body}>
				What defines a good front-end developer is one that has skilled knowledge
				of HTML, CSS, JS with a vast understanding of User design thinking as
				they'll be building web interfaces with accessibility in mind. They should
				also be excited to learn, as the world of Front-End Development keeps
				evolving.
			</p>
			<ButtonAction type={'link'} to={'sign-up'}>
				Sign up
			</ButtonAction>
		</div>
	);
};

export default ImageText;
