import React from 'react'

class ExampleChild extends React.Component {
	componentWillUnmount() {
		alert(
			'El componente ExampleChild está a punto de ser eliminado (desmontado).'
		)
	}
	render() {
		return <h1>Hola The Bridge!</h1>
	}
}

export default ExampleChild
