import React, { FC } from 'react';
import ImageText from '../../entiries/ImageText/ImageText';
import classes from './TestAssignmentTitle.module.scss';
import image from '../../shared/static/images/pexels-alexandr-podvalny-1227513.jpg';

const TestAssignmentTitle: FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={`${classes.testAssignment} ${className}`}>
			<img className={classes.testAssignment__image} width={1070} height={717} src={image} alt="field" />
			<ImageText className={classes.testAssignment__text} />
		</div>
	);
};

export default TestAssignmentTitle;
