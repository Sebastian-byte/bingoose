import { SEARCHING, SEARCHING_SUCCESS, SEARCHING_FAILURE } from '../constants';

const initialState = {
  elements: [],
  loading: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHING:
      return { ...state, loading: true };

    case SEARCHING_SUCCESS:
      return { ...state, elements: action.payload };

    case SEARCHING_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
