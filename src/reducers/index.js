import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';
import GetElementsReducer from './GetElementsReducer';
import GetDetailElementReducer from './GetDetailElementReducer';


export default combineReducers({
	nav: NavigationReducer,
	GetElements: GetElementsReducer,
	GetElementDetail: GetDetailElementReducer
});
