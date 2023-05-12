import React, { FC } from 'react';
import classes from './Main.module.scss';
import Header from '../../widgets/Header/Header';
import TestAssignmentTitle from '../../widgets/TestAssignmentTitle/TestAssignmentTitle';

const Main: FC = () => {
	return (
		<>
			<Header />
			<TestAssignmentTitle />
		</>
	);
};

export default Main;
