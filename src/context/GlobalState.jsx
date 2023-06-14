import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import AppReducer from './AppReducer'

const initialState = {
	characters: [],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)

	const getCharacters = async () => {
		const response = await axios.get(
			'https://rickandmortyapi.com/api/character'
		)
		dispatch({
			type: 'GET_CHARACTERS',
			payload: response.data.results,
		})
	}

	return (
		<GlobalContext.Provider
			value={{
				characters: state.characters,
				getCharacters,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}
