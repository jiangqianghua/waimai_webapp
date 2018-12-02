
import { combineReducers } from 'redux';

import headerReducer from './headerReducer';
import contentListReducer from './contentListReducer';


const reducers = combineReducers({
	headerReducer,
	contentListReducer
});


export default reducers;