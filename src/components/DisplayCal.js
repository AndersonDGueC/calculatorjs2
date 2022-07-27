import {useContext} from 'react'
import calContext from './store/calContext'

const DisplayCal=()=>{

	const [state]=useContext(calContext)
	return(
	<div id="display0">
		<div id="display">{state.output}</div>
		<div id="input1">{state.input}</div> 
	</div>)
}

export default DisplayCal;
