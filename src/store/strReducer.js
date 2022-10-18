const defaultState = {
    strWith:['some test string'],
    letters:[`тут з'являться літери`],
    str:[`тут з'являться великі літери`],
    secondSpace:['тут зєявиться індекс другого пробілу'],
    sixLetters:[`тут з'явиться строка без останніх шести символів`],
}
const BIG_LETTERS = 'BIG_LETTERS';
const BIG_LETTERS_WITH_STR = 'BIG_LETTERS_WITH_STR';
const GET_LETTERS = 'GET_LETTERS';
const FIND_SECOND_SPACE = 'FIND_SECOND_SPACE';
const WITHOUT_LAST_SIX_LETTERS = 'WITHOUT_LAST_SIX_LETTERS';

export const strReducer = (state=defaultState,action) =>{
    switch(action.type){
        case BIG_LETTERS: return {...state,str:[action.payload]}
            
        case BIG_LETTERS_WITH_STR: return {...state,strWith:[action.payload]}
            
        case GET_LETTERS: return {...state,letters:[action.payload]}
            
        case FIND_SECOND_SPACE: return {...state,secondSpace:[action.payload]}

        case WITHOUT_LAST_SIX_LETTERS: return {...state,sixLetters:[action.payload]}

        default: return state;
    }
}

export const bigLettersAction = (payload) => {
    return {type:BIG_LETTERS,payload:payload}
}
export const bigLettersWithStrAction = (payload) => {
    return {type:BIG_LETTERS_WITH_STR,payload:payload}
}
export const getLettersAction = (payload) => {
    return {type:GET_LETTERS,payload:payload}
}
export const findSecondSpaceAction = (payload) => {
    return {type:FIND_SECOND_SPACE,payload:payload}
}
export const withoutLastSixLettersAction = (payload) => {
    return {type:WITHOUT_LAST_SIX_LETTERS,payload:payload}
}