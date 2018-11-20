import tabReducer from './tabReducer.js'
import categoryReducer from './categoryReducer.js'
import contentListReducer from './contentListReducer.js'
import orderReducer from './orderReducer.js'
import {combineReducers} from 'redux'
const reducers = combineReducers({
	tabReducer,
	categoryReducer,
	contentListReducer,
	orderReducer
});

export default reducers;