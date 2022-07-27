const ButtosCal=({num, name, push})=>{
return(
	<div>
		<button className="boton" id={name} onClick={push} value={num} > {num} </button>
	</div>
)
}

export default ButtosCal
