import { useEffect, useState } from 'react';
import axios from 'axios';

const UseGetUsers = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [nextUrl, setNextUrl] = useState('');
	const [disabled, setDisabled] = useState(false);

	const [url, setUrl] = useState(
		'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
	);

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				setUsers(response.data.users);
				setNextUrl(response.data.links.next_url);
			})
			.catch((e) => console.log(e));
	}, [url]);

	// reFetch after registration
	const reFetch = () => {
		axios
			.get(
				'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
			)
			.then((response) => setUsers(response.data.users))
			.catch((e) => console.log(e));
	};

	useEffect(() => {
		nextUrl === null && setDisabled(true);
	}, [nextUrl]);

	useEffect(() => {
		setLoading(false);
	}, [users]);
	const nextPage = () => {
		if (nextUrl !== null) {
			setUrl(nextUrl);
			setLoading(true);
		}
	};

	return {
		users,
		nextPage,
		disabled,
		loading,
		setUrl,
		reFetch,
	};
};

export default UseGetUsers;
