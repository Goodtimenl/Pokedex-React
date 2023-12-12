function NavBar({ previous, next }) {

	return (
		<div className="buttonApp">
			<button onClick={previous}>Précédent</button>
			<button onClick={next}>Suivant</button>
		</div>
	)
}

export default NavBar