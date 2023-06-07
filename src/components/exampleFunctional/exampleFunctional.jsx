import React, { useState, useEffect } from 'react'
import ExampleChild from '../exampleChildF/exampleChildF'

const Example = () => {
	const [favoriteColor, setFavoriteColor] = useState('red')
	const [show, setShow] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setFavoriteColor('green')
		}, 1000)
	}, [])

	useEffect(() => {
		console.log('el componente se ha actualizado')
	})

	const handleRemove = () => setShow(false)

	return (
		<div>
			<h1>My Favorite Color is {favoriteColor}</h1>
			{show && <ExampleChild />}
			<button onClick={handleRemove}>Eliminar el componete ExampleChild</button>
		</div>
	)
}

export default Example
