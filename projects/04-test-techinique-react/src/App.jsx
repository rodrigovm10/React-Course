import { getRandomFact } from './services/facts';
import { useEffect, useState } from 'react';
import { useCatImage } from './services/hooks/useCatImage';
import './App.css';

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

function useCatFact() {
	const [fact, setFact] = useState();

	const refreshFact = () => {
		getRandomFact().then(newFact => setFact(newFact));
	};
	// para recuperar la cita al cargar la página
	useEffect(getRandomFact, []);

	return { fact, refreshFact };
}

export function App() {
	const { fact, refreshFact } = useCatFact();
	const { imageUrl } = useCatImage({ fact });

	const handleClick = async () => {
		refreshFact();
	};

	return (
		<main>
			<h1>App de gatitos</h1>
			<button onClick={handleClick}>Get new fact</button>
			{fact && <p>{fact}</p>}
			{imageUrl && (
				<img
					src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
					alt={`Image extracted using the first three words for ${fact}`}
				/>
			)}
		</main>
	);
}
