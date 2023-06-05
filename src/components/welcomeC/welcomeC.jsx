import React, { Component } from 'react'

export class WelcomeC extends Component {
	render() {
		return (
			<div>
				<h1>welcome Class component. Name: {this.props.name}</h1>
			</div>
		)
	}
}

export default WelcomeC
