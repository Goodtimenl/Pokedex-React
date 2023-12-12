import React from 'react';

function PokemonCard(props) {
	const { pokemon } = props;

	return (
		<div className="pokemon-card">
			<h2>{pokemon.name}</h2>
			{pokemon.imgSrc ? (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			) : (
				<p>???</p>
			)}
		</div>
	);
}






export default PokemonCard;