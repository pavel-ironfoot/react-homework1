const defaultState = {
    result2a:[],
    result2b:[],
    result2c:[],
}
const SHOW_RESULT2A = 'SHOW_RESULT2A';
const SHOW_RESULT2B = 'SHOW_RESULT2B';
const SHOW_RESULT2C = 'SHOW_RESULT2C';

export const resultReducer = (state=defaultState,action)=>{
    switch (action.type){

      case SHOW_RESULT2A: return {...state,result2a:[action.payload]}
        
      case SHOW_RESULT2B: return {...state,result2b:[action.payload]}
        
      case SHOW_RESULT2C: return {...state,result2c:[action.payload]}
        
      default:
        return state;
    }
  }

  export const showResult2aAction = (payload) =>{
    return {type:SHOW_RESULT2A,payload:payload}
  }

  export const showResult2bAction = (payload) =>{
    return {type:SHOW_RESULT2B,payload:payload}
  }

  export const showResult2cAction = (payload) =>{
    return {type:SHOW_RESULT2C,payload:payload}
  }