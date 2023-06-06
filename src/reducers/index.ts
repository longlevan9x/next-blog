import { combineReducers } from 'redux';
import counterReducer from './counterSlice';
import HeadMetaSlice from './headMetaSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    headMeta: HeadMetaSlice,
});

export default rootReducer;
