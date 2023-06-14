import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

import { Character } from '../../components/character/Character'

export const Home = () => {
	const { characters, getCharacters } = useContext(GlobalContext)

	useEffect(() => {
		getCharacters()
	}, [])

	return (
		<>
			<h1>Home</h1>
			{characters.map((character) => (
				<Character
					key={character.id}
					name={character.name}
					image={character.image}
				/>
			))}
		</>
	)
}
