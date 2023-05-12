import React, { useRef, useState } from 'react';

const usePhoneInput = () => {
	const [phone, setPhone] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	// input data transformation
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let { value } = e.target;
		const x = value
			.replace(/\D/g, '')
			.match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
		if (x) {
			value = !x[2]
				? x[1]
				: '+38 (' +
				  x[2] +
				  ') ' +
				  (x[3] ? x[3] : '') +
				  (x[4] ? ' - ' + x[4] : '') +
				  (x[5] ? ' - ' + x[5] : '');
			setPhone(value);
		}
	};

	const handleFocus = () => {
		!phone && setPhone('+38 (0)');

		// feature for move cursor after zero on focus
		setTimeout(() => {
			if (inputRef.current) {
				inputRef.current.selectionStart = 6;
				inputRef.current.selectionEnd = 6;
			}
		}, 0);
	};

	const phoneProps = {
		ref: inputRef,
		onFocus: handleFocus,
		value: phone,
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e),
		type: 'text',
	};
	return {
		phoneProps,
	};
};

export default usePhoneInput;
