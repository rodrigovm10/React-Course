import { useState } from 'react';

export function TwitterFollowCard({ userName, children, initialIsFollowing }) {
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

	const imageSrc = `https://unavatar.io/${userName}`;
	const text = isFollowing ? 'Siguiendo' : 'Seguir';
	const buttonClassName = isFollowing
		? 'tw-followCard-button is-following'
		: 'tw-followCard-button';

	const handleClick = () => {
		setIsFollowing(!isFollowing);
	};

	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img
					src={imageSrc}
					alt="El avatar de midudev"
					className="tw-followCard-avatar"
				/>
				<div className="tw-followCard-info">
					<strong className="tw-followCard-infoUserName">{children}</strong>
					<span className="tw-followCard-infoUserName">{`@${userName}`}</span>
				</div>
			</header>

			<aside>
				<button className={buttonClassName} onClick={handleClick}>
					<span className="tw-followCard-text">{text}</span>
					<span className="tw-followCard-stopFollow">Dejar de Seguir</span>
				</button>
				{/*seguir es children - hijo de ese elemento*/}
			</aside>
		</article>
	);
}
