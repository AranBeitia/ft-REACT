export const Character = (props) => {
	return (
		<>
			<p>{props.name}</p>
			<img src={props.image} alt={props.name} />
		</>
	)
}
