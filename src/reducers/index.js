import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';
import GetElementsReducer from './GetElementsReducer';
import GetDetailElementReducer from './GetDetailElementReducer';
import GetConvertedMoneyReducer from './GetConvertedMoneyReducer';


export default combineReducers({
	nav: NavigationReducer,
	GetElements: GetElementsReducer,
	GetElementDetail: GetDetailElementReducer,
	ConvertedMoney: GetConvertedMoneyReducer,
	
});
