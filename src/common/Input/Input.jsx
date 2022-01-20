/**
 * Input React component
 */
function Input(props) {
	return (
		<>
			<label htmlFor={props.id}>{props.labelText}</label>
			<input
				type={props.type}
				id={props.id}
				placeholder={props.placeholdetText}
				onChange={props.onChange}
				className='form-control'
			></input>
		</>
	);
}

export default Input;
