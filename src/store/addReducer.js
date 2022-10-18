const defaultState = {
    number:0,
}
const ADD_NUMBER = 'ADD_NUMBER';
const MINUS_NUMBER = 'MINUS_NUMBER';

export const addReducer = (state=defaultState,action)=>{
    switch (action.type){
      case ADD_NUMBER: return {...state,number:(state.number*10 + action.payload*10)/10}
        
      case MINUS_NUMBER: return {...state,number:(state.number*10 - action.payload*10)/10}
        
      default:
        return state;
    }
  }

export const addNumberAction = (payload) =>{
  return {type:ADD_NUMBER,payload:payload};
}

export const minusNumberAction = (payload) =>{
  return {type:MINUS_NUMBER,payload:payload};
}