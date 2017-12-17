import { AppNavigator } from '../Router';

const INITIAL_STATE = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Welcome'));


export default (state = INITIAL_STATE, action) => {
	const nextState = AppNavigator.router.getStateForAction(action, state);
	switch (action.type) {
		default:
			return nextState || state;
	}
};
