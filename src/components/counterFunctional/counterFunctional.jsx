import { useState } from 'react'

const Counter = (props) => {
	const [counter, setCounter] = useState(props.initialValue)

	const increment = () => {
		setCounter(counter + 1)
	}
	return (
		<div>
			<p>{counter}</p>
			<button onClick={increment}>+</button>
		</div>
	)
}

export default Counter
