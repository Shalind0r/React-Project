import { useEffect, useState } from 'react';
import axios from 'axios';

const UseGetUsers = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [nextUrl, setNextUrl] = useState('');
	const [disabled, setDisabled] = useState(false);

	const [url, setUrl] = useState(
		'https://frontend-test-assignment-api.abz.agency/api/v1/users?offset=6&count=6',
	);

	useEffect(() => {
		if (nextUrl !== null) {
			axios
				.get(url)
				.then((response) => {
					setUsers(response.data.users);
					setNextUrl(response.data.links.next_url);
				})
				.catch((e) => console.log(e));
		}
	}, [url, nextUrl]);

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
	};
};

export default UseGetUsers;
