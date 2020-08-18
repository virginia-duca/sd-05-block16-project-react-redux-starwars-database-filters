import {
    REQUEST_PLANETS,
    RECEIVED_PLANETS_SUCCESS,
    RECEIVED_PLANETS_FAIL,
} from '../components/actions/actions';

import {
  CHANGE_FILTERBYNAME,
} from '../components/actions/actionsFilter';

const initialState = {
  isFetching: false,
  data: [],
  error: '',
  filters: {
    filterByName: {
      name: '',
    },
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return { ...state, isFetching: true };
    case RECEIVED_PLANETS_SUCCESS:
      return { ...state, data: [...action.data.results], isFetching: false };
    case RECEIVED_PLANETS_FAIL:
      return { ...state, error: action.error, isFetching: false };
    case CHANGE_FILTERBYNAME:
      return { ...state, filters: { filterByName: { name: action.nameInput } } };
    default:
      return state;
  }
};

export default dataReducer;
