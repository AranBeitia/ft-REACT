import React from 'react'

// const numbers = [1, 2, 3, 4, 5]
// const listItems = numbers.map((number, index) => <li key={index}>{number}</li>)

function ListItems(props) {
	return (
		<div>
			<ul>
				{props.items.map((item, index) => (
					<li key={index}>
						<p>Name: {item.name}</p>
						<p>Email: {item.email}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ListItems
