const defaultState ={
    getNumber:0,
}
const GET_NUMBER = 'GET_NUMBER';
export const getNumberReducer = (state=defaultState,action)=>{
    switch (action.type){
      case GET_NUMBER: return {...state,getNumber:parseInt(action.payload,10)}
        
      default:
        return state;
    }
  }

export const getNumberAction = (payload) =>{
  return {type:GET_NUMBER,payload:payload};
}