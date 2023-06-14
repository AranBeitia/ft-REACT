import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Character } from '../../components/character/Character'

export const Home = () => {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		getCharacters()
	}, [])

	const getCharacters = async () => {
		try {
			const response = await axios.get(
				'https://rickandmortyapi.com/api/character'
			)
			setCharacters(response.data.results)
		} catch (error) {
			console.error(error)
		}
	}

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
