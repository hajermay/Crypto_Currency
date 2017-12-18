import {
    GET_ELEMENT_DETAIL,
    GET_ELEMENT_DETAIL_SUCCESS,
    GET_ELEMENT_DETAIL_FAILED  
} from '../actions/types';

const INITIAL_STATE = {
	ElementDetail: [],
};

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case GET_ELEMENT_DETAIL:
      return { ...state, loading: true, };
    case GET_ELEMENT_DETAIL_SUCCESS:
      return { ...state,
        ElementDetail: action.payload,
      };
    default:
      return state;
    }
};
