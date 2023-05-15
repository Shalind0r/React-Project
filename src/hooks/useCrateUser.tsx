import {  useEffect, useState } from 'react';
import axios from 'axios';

import { IForm } from '../shared/types/IPost';

export const useCrateUser = (reFetch: () => void) => {
	const [positions, setPositions] = useState([]);
	const [status, setStatus] = useState(false);
	const [token, setToken] = useState('');
	const [error, setError] = useState('');
	useEffect(() => {
		axios
			.get(' https://frontend-test-assignment-api.abz.agency/api/v1/positions')
			.then((response) => setPositions(response.data.positions))
			.catch((e) => console.log(e));
		axios
			.get(' https://frontend-test-assignment-api.abz.agency/api/v1/token')
			.then((response) => setToken(response.data.token))
			.catch((e) => console.log(e));
	}, []);

	const onSubmit = async (data: IForm) => {
		if (!token) {
			console.log('No token found');
			return;
		}
		const formData = new FormData();
		formData.append('position_id', data.position_id);
		formData.append('photo', data.photo[0]);
		formData.append('phone', data.phone);
		formData.append('email', data.email);
		formData.append('name', data.name);
		if (token) {
			await axios
				.post(
					'https://frontend-test-assignment-api.abz.agency/api/v1/users',
					formData,
					{
						headers: { 'Content-Type': 'multipart/form-data', Token: token },
					},
				)
				.then(() => {
					setStatus(true);
					reFetch();
				})
				.catch((e) => {
					console.log(e);
					setError(e.response.data.message);
				});
		}
	};
	return {
		positions,
		onSubmit,
		status,
		error,
	};
};
