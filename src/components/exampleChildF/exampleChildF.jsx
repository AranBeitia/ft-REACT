import React, { useEffect } from 'react'

function exampleChildF() {
	useEffect(() => {
		return () => {
			alert('El componente ExampleChild ha sido eliminado(desmontado).')
		}
	})
	return <h1>Hola The Bridge!</h1>
}

export default exampleChildF
