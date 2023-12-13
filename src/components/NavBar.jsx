function NavBar({ pokemonList, onPokemonClick }) {
	const handleClick = (index) => {
		onPokemonClick(index);
	};



	return (
		<div className="buttonApp">
			{pokemonList.map((pokemon, index) => (
				<button key={index} onClick={() => handleClick(index)}>
					{pokemon.name}
				</button>
			))}
		</div>
	);
}

export default NavBar;

