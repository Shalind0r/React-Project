import React, { FC } from 'react';
import classes from './Main.module.scss';
import Header from '../../widgets/Header/Header';
import TestAssignmentTitle from '../../widgets/TestAssignmentTitle/TestAssignmentTitle';
import WorkingWithGET from '../../widgets/WorkingWithGET/WorkingWithGET';
import WorkingWithPost from '../../widgets/WorkingWithPost/WorkingWithPost';
import useGetUsers from '../../hooks/useGetUsers';
import { useCrateUser } from '../../hooks/useCrateUser';

const Main: FC = () => {
	const { users, loading, nextPage, disabled, reFetch } = useGetUsers();
	const { positions, onSubmit, status, error } = useCrateUser(reFetch);

	return (
		<>
			<Header />
			<TestAssignmentTitle className={classes.mb140} />
			<WorkingWithGET
				disabled={disabled}
				loading={loading}
				users={users}
				nextPage={nextPage}
				className={classes.mb140}
			/>
			<WorkingWithPost
				positions={positions}
				error={error}
				status={status}
				onSubmit={onSubmit}
				className={classes.mb140}
			/>
		</>
	);
};

export default Main;
