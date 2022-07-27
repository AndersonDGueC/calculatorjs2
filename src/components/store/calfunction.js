import {WRITE_NUM, WRITE_MORE, WRITE_SUB, WRITE_MUL, WRITE_DIV, WRITE_DEC, WRITE_CLEAR, WRITE_EQUAL } from './actionTypeCal'
//import stringCalculator from 'string-calculator'
import initialStateCal from './initialStateCal';

export const reducerCal=(state, action)=>{
	switch(action.type){
	case WRITE_NUM:
		console.log(state.input)
		//let int_num=parseInt(action.payload)
		//let int_inp=parseInt(state.input)
		//if(int_num===0 && int_inp===0){
		if(state.input==='0' && action.payload.replace(/\s+/g, '')==='0'){
		return{...state, input:action.payload.replace(/\s+/g, ''), output:action.payload.replace(/\s+/g, ''), operatorFlag:action.flag_oper, operatorFlagMD:action.flag_oper}
		}
		//else if(int_num!==0 && int_inp===0){
		else if(state.input==='0' && action.payload.replace(/\s+/g, '')!=='0'){
		return{...state, input:action.payload.replace(/\s+/g, ''), output:action.payload.replace(/\s+/g, ''), operatorFlag:action.flag_oper, operatorFlagMD:action.flag_oper}
		}
		else{

		return{...state, input:state.input+action.payload.replace(/\s+/g, ''), output:state.input+action.payload.replace(/\s+/g, ''), operatorFlag:action.flag_oper, operatorFlagMi:action.flag_oper, operatorFlagM:action.flag_oper, operatorFlagD:action.flag_oper, operatorFlagI:action.flag_oper }

		}

	case WRITE_MORE:
		console.log(state.input)
		console.log(state.output)
		//console.log(typeof(action.payload))
		if(!state.operatorFlagS){
	     return{...state, input:state.input+action.payload.replace(/\s+/g, ''), output:state.input+action.payload.replace(/\s+/g, ''), operatorFlagS: action.flag_oper, decimalFlag:action.flag_dec}
		}
		else{
	     return{...state, input:state.input, output:state.output}
		}
		
	case WRITE_SUB:
		if(!state.operatorFlagMi){
	     return{...state, input:state.input+action.payload.replace(/\s+/g, ''), output:state.input+action.payload.replace(/\s+/g, ''), operatorFlagMi: action.flag_oper, decimalFlag:action.flag_dec}
		}
		else{
	     return{...state, input:state.input, output:state.output}
		}

	case WRITE_MUL:
 		//console.log(typeof(action.payload))
		if(!state.operatorFlagM){
	     return{...state, input:state.input+action.payload.replace(/\s+/g, ''), output:state.input+action.payload.replace(/\s+/g, ''), operatorFlagM: action.flag_oper, decimalFlag:action.flag_dec}
		}
		else{
	     return{...state, input:state.input, output:state.output}
		}

	case WRITE_DIV:
		if(!state.operatorFlagD){
		return{...state, input:state.input+action.payload.replace(/\s+/g, ''), output:state.input+action.payload.replace(/\s+/g, ''), operatorFlagD: action.flag_oper, decimalFlag:action.flag_dec}
		}
		else{
		return{...state, input:state.input, output:state.output}
		}

	case WRITE_DEC:
		console.log(state.input)
		console.log(state.operatorFlag&&(action.payload.replace(/\s+/g, '')==='.'))
		if((!state.operatorFlag||!state.operatorFlagMD) && !state.decimalFlag){
		return{...state, input:state.input+action.payload.replace(/\s+/g, ''), output:state.input+action.payload.replace(/\s+/g, ''), decimalFlag: action.flag_dec}
		}
		else if(state.input==='0'||state.output==='0'){
		return{...state, input:'0'+action.payload.replace(/\s+/g, ''), output:'0'+action.payload.replace(/\s+/g, ''), decimalFlag:action.flag_dec}
		}
		else if(state.operatorFlag && (action.payload.replace(/\s+/g, '')==='.')){
		return{...state, input:state.input+'0.', output:state.input+'0.', decimalFlag:action.flag_dec}
		}
		else if(state.operatorFlagMD && (action.payload.replace(/\s+/g, '')==='.')){
		return{...state, input:state.input+'0.', output:state.input+'0.', decimalFlag:action.flag_dec}
		}
		else{
		return{...state, input:state.input, output:state.output}
		}
	case WRITE_CLEAR:	
		return initialStateCal

	case WRITE_EQUAL:
		console.log(state.input)
		console.log(state.output)
		console.log(typeof(state.input))
		let input1= state.input
		
		let input2=input1.split('');
		const arrSimb= ['+', '-', 'x', '/']
		let indexSimbIn= []
		indexSimbIn=arrSimb.map((element)=>{
		return input2.indexOf(element)
		})
		indexSimbIn.sort()
		//indexSimbIn.reverse()
		let data=indexSimbIn.toString()
		data=data.replace(/,/g,'')
		data=data.replace(/-1/g,'')
		let indexSimbIn2=data.split('')
		console.log(indexSimbIn2)
		
		let arrcord
		for(let j=0;j<indexSimbIn2.length-1;j++){
		if((indexSimbIn2[j+1]-indexSimbIn2[j])===1){
		arrcord=true
		}
		else{
		arrcord=false
		}
		}
		console.log(arrcord)
		if(indexSimbIn2.length>2 && arrcord){
		let n=indexSimbIn2.length-1
		let inputa=input1.slice(0,parseInt(indexSimbIn2[0]))
		let inputb=input1.slice(parseInt(indexSimbIn2[n]),input1.length)
		input1=inputa+inputb
	
		}
		else{
		input1=state.input;
		}
		if(input1.search('x')!==-1){
		input1=input1.replace('x','*')
		}

		let output1=eval(input1).toString()
				
		if(!state.operatorFlagI){
		return{...state, input:output1, output:output1, operatorFlagI: action.flag_oper, operatorFlagS:!action.flag_oper, operatorFlagMi:!action.flag_oper, operatorFlagM:!action.flag_oper, operatorFlagD:!action.flag_oper}
		}
		else{
		return{...state, input:state.input, output:state.output}
		}
		//const output1=stringCalculator(input1)

//		if(!state.operatorFlag){
		//console.log(input1)
		//console.log(stringCalculator(input1))
		//return{...state, input_v:output1, output_v:output1+action.payload+state.input_v}
//		}
/*		else if(state.operatorFlag && (action.payload===('+'||'-'||'*'||'/'||'='))){
		return{...state, input: action.payload+output1}
		}
		else{
		return state
		}
*/
		
	default:
	     return initialStateCal
	}
}


