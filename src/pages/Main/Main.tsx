import React, { FC } from 'react';
import classes from './Main.module.scss';
import Header from '../../widgets/Header/Header';
import TestAssignmentTitle from '../../widgets/TestAssignmentTitle/TestAssignmentTitle';
import WorkingWithGET from '../../widgets/WorkingWithGET/WorkingWithGET';

const Main: FC = () => {
	return (
		<>
			<Header />
			<TestAssignmentTitle className={classes.mb140} />
			<WorkingWithGET className={classes.mb140} />
		</>
	);
};

export default Main;
