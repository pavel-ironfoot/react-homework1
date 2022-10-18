const defaultState ={
    piNumber:0,
}
const GET_PI = 'GET_PI';
const ROUND_PI = 'ROUND_PI';
export const piReducer = (state=defaultState,action)=>{
    switch (action.type){
      case GET_PI: return {...state,piNumber:Math.PI}
        
      case ROUND_PI: return {...state,piNumber:Math.PI.toFixed(2)}
        
      default:
        return state;
    }
  }

  export const getPiAction = () =>{
    return {type:GET_PI}
  }
  export const roundPiAction = () => {
    return {type:ROUND_PI}
  }