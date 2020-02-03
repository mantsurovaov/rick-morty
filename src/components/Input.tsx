import React, { useState } from 'react';
import FetchedPhotos from './FetchedPhotos';
import { SearchInput, FlexWrapper } from '../styles';

const Input = () => {
	const [input, setInput] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLElement>): void => {
		e.preventDefault();
		const target = e.target as HTMLTextAreaElement;
		setInput(target.value);
	};

	return (
		<>
			<SearchInput type="text" onChange={e => handleChange(e)} />
			<FlexWrapper>
				<FetchedPhotos name={input} />
			</FlexWrapper>
		</>
	);
};

export default Input;
