import { AppNavigator } from '../Router';

const INITIAL_STATE = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Welcome'));


export default (state = INITIAL_STATE, action) => {
	const nextState = AppNavigator.router.getStateForAction(action, state);
	switch (action.type) {
		case 'Navigation/NAVIGATE': {
			const lastRoute = state.routes[state.routes.length - 1];
			if (action.routeName === lastRoute.routeName) {
				return state;
			}
			return { ...nextState };
		}
		default:
			return nextState || state;
	}
};
