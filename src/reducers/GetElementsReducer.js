import {
  GET_ALL_ELEMENTS,
  GET_ALL_ELEMENTS_SUCCESS,
  GET_ALL_ELEMENTS_FAILED
} from '../actions/types';

const INITIAL_STATE = {
	ElementList: [],
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case GET_ALL_ELEMENTS:
      return { ...state, loading: true, };
    case GET_ALL_ELEMENTS_SUCCESS:
      return { ...state,
        ElementList: action.payload,
      };
    default:
      return state;
    }
};
