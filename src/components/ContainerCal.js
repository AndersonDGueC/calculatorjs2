import React, {useReducer} from  'react';
import ButtosCal from './ButtosCal';
import DisplayCal from './DisplayCal';
import TeclasCal from '../TeclasCal';
import INITIAL_STATE_CAL from './store/initialStateCal';
import {reducerCal} from './store/calfunction';
import CalContext from './store/calContext';
import {writeNum, writeMore, writeSub, writeMul, writeDiv, writeDec, writeClear, writeEqual} from './store/actionCal'


const CointainerCal=()=>{

const [state, dispatch]=useReducer(reducerCal, INITIAL_STATE_CAL)

const handleClickNum=(e)=>{
const {innerHTML} = e.target

dispatch(writeNum(innerHTML))

}

const handleClickMore=(e)=>{
const {innerHTML} = e.target

dispatch(writeMore(innerHTML))

}


const handleClickSub=(e)=>{
const {innerHTML} = e.target

dispatch(writeSub(innerHTML))

}

const handleClickMul=(e)=>{
const {innerHTML} = e.target

dispatch(writeMul(innerHTML))

}

const handleClickDiv=(e)=>{
const {innerHTML} = e.target

dispatch(writeDiv(innerHTML))

}

const handleClickClear=(e)=>{
const {innerHTML} = e.target

dispatch(writeClear(innerHTML))

}

const handleClickDec=(e)=>{
const {innerHTML} = e.target

dispatch(writeDec(innerHTML))

}

const handleClickEqual=(e)=>{
const {innerHTML} = e.target

dispatch(writeEqual(innerHTML))

}


return(
	<CalContext.Provider value={[state, dispatch]}>
	<div className="container1">
		<DisplayCal/>
	<div className='container2'>

	{ TeclasCal.map((arr)=>{
		if(arr.simb==='+'){
		return(
			<ButtosCal key={arr.num} num={arr.simb} name={arr.num} push={handleClickMore} />)
		}
		else if(arr.simb==='-'){
		return(
			<ButtosCal key={arr.num} num={arr.simb} name={arr.num} push={handleClickSub}/>
	)
	}
		else if(arr.simb==='x'){
		return(
			<ButtosCal key={arr.num} num={arr.simb} name={arr.num} push={handleClickMul}/>
	)
	}
		else if(arr.simb==='/'){
		return(
			<ButtosCal key={arr.num} num={arr.simb} name={arr.num} push={handleClickDiv}/>
	)
	}
		else if(arr.simb==='.'){
		return(
			<ButtosCal key={arr.num} num={arr.simb} name={arr.num} push={handleClickDec} />
	)
	}
		else{
		return(
			<ButtosCal  key={arr.num} num={arr.simb} name={arr.num} push={handleClickNum} />

	)
	}
	}
	)
	}
	</div>
		<div className='container3'>
			<ButtosCal key='clear' num='AC' name='clear' push={handleClickClear}/>
			<ButtosCal key='equal' num='=' name='equals' push={handleClickEqual}/>
		</div>
	</div>
	</CalContext.Provider>
	
)

}

export default CointainerCal;
