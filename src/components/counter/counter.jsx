import React, { Component } from 'react'
import ExampleChild from '../exampleChild/exampleChild'

export class counter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			counter: this.props.initialValue,
			favoriteColor: 'red',
			show: true,
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ favoriteColor: 'green' })
		}, 1000)
	}

	componentDidUpdate() {
		console.log('el componente se ha actualizado')
	}

	increment = () => {
		this.setState({ counter: this.state.counter + 1 })
	}

	handleRemove = () => {
		console.log(this.state.show)
		this.setState({ show: false })
	}

	render() {
		return (
			<div>
				<p>Counter: {this.state.counter}</p>
				<button onClick={this.increment}>+</button>
				<p>My favourite color is {this.state.favoriteColor}</p>

				{this.state.show && <ExampleChild />}
				<button onClick={this.handleRemove}>
					Eliminar el componete ExampleChild
				</button>
			</div>
		)
	}
}

export default counter
