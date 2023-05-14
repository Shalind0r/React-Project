import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

const schema = yup.object().shape({
	name: yup
		.string()
		.required('This field is required')
		.min(2, 'Min length is 2')
		.max(60, 'Max length is 60'),
	email: yup
		.string()
		.required('This field is required')
		.matches(
			/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
			'Invalid email address example: john.doe@example.com',
		)
		.min(2, 'Min length is 2')
		.max(100, 'Max length is 100'),
	phone: yup
		.string()
		.required('This field is required')
		.matches(/^[\\+]?380([0-9]{9})$/, {
			message: 'Invalid phone number',
			excludeEmptyString: true,
		}),
	photo: yup
		.mixed()
		.test('required', 'Photo is Required', (value: any) => {
			return value.length > 0;
		})
		.test(
			'filesize',
			'The photo size must not be greater than 5 Mb.',
			(value: any) => {
				return value && value[0] && value[0].size <= 500000;
			},
		)
		.test('type', 'Photo must be jpeg or jpg', function (value: any) {
			const photo = 'image/jpeg' || 'image/jpg';
			return value && value[0] && value[0].type === photo;
		})
		.test('dimensions', 'Minimum size of photo is 70x70px', (value: any) => {
			if (!value || !value[0]) {
				return true;
			}
			const image = new Image();
			image.src = window.URL.createObjectURL(value[0]);
			return new Promise((resolve) => {
				image.onload = () => {
					const width = image.width;
					const height = image.height;
					resolve(width >= 70 && height >= 70);
				};
			});
		}),
	position_id: yup.number().nullable().required('Position is required'),
});

export const validationRules = yupResolver<yup.AnyObjectSchema>(schema);
