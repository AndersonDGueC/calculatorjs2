import {WRITE_NUM, WRITE_MORE, WRITE_SUB, WRITE_MUL, WRITE_DIV, WRITE_DEC, WRITE_CLEAR, WRITE_EQUAL} from './actionTypeCal';

export const writeNum = (num) => ({type: WRITE_NUM, payload:num, flag_oper:false, flag_dec:false});

export const writeMore = (more) => ({type: WRITE_MORE, payload:more, flag_oper:true, flag_dec:false});

export const writeSub = (sub) => ({type: WRITE_SUB, payload:sub, flag_oper:true, flag_dec:false});

export const writeMul = (mul) => ({type: WRITE_MUL, payload:mul, flag_oper:true, flag_dec:false});

export const writeDiv = (div) => ({type: WRITE_DIV, payload:div, flag_oper:true, flag_dec:false});

export const writeDec = (dec) => ({type: WRITE_DEC, payload:dec, flag_oper:false, flag_dec:true});

export const writeClear = (clear) => ({type: WRITE_CLEAR,  payload:clear, flag_oper:true, flag_dec:false})

export const writeEqual = (equal) => ({type: WRITE_EQUAL, payload:equal, flag_oper:true, flag_dec:false })
