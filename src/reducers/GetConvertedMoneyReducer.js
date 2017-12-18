import {
  CONVERT_MONEY,
  CONVERT_MONEY_SUCCESS,
  UPDATE_ELEMENT_TO,
  UPDATE_ELEMENT_FROM
} from '../actions/types';

const INITIAL_STATE = {
	convertedMoney: [],
  loading: true,
  elementTo: '',
  elementFrom: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {

    case CONVERT_MONEY:
      return { ...state, loading: true, };
    case CONVERT_MONEY_SUCCESS:
      return { ...state,
        convertedMoney: action.payload,
      };
    case UPDATE_ELEMENT_TO:
        return { ...state, elementTo: action.payload, };

    case UPDATE_ELEMENT_FROM:
            return { ...state, elementFrom: action.payload, };
    default:
      return state;
    }
};
