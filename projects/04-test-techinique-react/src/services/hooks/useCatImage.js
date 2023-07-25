import { useEffect, useState } from 'react';

export function useCatImage({ fact }) {
	const [imageUrl, setImageUrL] = useState();

	// para recuperar la imagen cada vez que tenemos una cita nueva
	useEffect(() => {
		if (!fact) return;

		const threeFirstWord = fact.split(' ', 3).join(' ');
		fetch(
			`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`
		)
			.then(res => res.json())
			.then(data => {
				const { url } = data;
				setImageUrL(url);
			});
	}, [fact]);

	return { imageUrl };
} // {imageUrl}
