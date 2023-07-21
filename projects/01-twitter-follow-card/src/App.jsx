import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
	return (
		<section className="App">
			<TwitterFollowCard userName="midudev">
				Miguel Ángel Dúran
			</TwitterFollowCard>
			<TwitterFollowCard isFollowing userName="pheralb">
				Pablo Heraldo
			</TwitterFollowCard>
		</section>
	);
}
