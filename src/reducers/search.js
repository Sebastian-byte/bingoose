import { SEARCHING, SEARCHING_SUCCESS, SEARCHING_FAILURE } from '../constants';

const initialState = {
  elements: [],
  loading: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHING:
      return { ...state, error: '', loading: true };

    case SEARCHING_SUCCESS:
      return { ...state, error: '', elements: action.payload, loading: false };

    case SEARCHING_FAILURE:
      return { ...state, error: action.payload, elements: [], loading: false };

    default:
      return state;
  }
};

export default reducer;
