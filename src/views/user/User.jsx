import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { UserForm } from '../../components/user-form/UserForm'

export const User = () => {
	const { characters } = useContext(GlobalContext)
	return (
		<>
			<UserForm />
			{characters.map((character) => (
				<p key={character.id}>{character.name}</p>
			))}
		</>
	)
}
