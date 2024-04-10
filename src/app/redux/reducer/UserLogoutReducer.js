// authReducer.js

import * as types from '../type/types';

const initialState = {
  loading: false,
  userData: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_USER_LOGOUT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCHING_USER_LOGOUT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };
    case types.FETCHING_USER_LOGOUT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        loading: false,
        userData: null,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
