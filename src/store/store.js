import { combineReducers, legacy_createStore as createStore, } from 'redux';
import { addReducer } from './addReducer';
import { piReducer } from './piReducer';
import { resultReducer } from './resultReducer';
import { getNumberReducer } from './getNumberReducer';
import { strReducer } from './strReducer';

const reducers = combineReducers({
    pi:piReducer,
    number:addReducer,
    result:resultReducer,
    getNumber:getNumberReducer,
    strRed:strReducer,
});

export const store = createStore(reducers);