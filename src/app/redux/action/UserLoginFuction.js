import * as types from '../type/types'
import { Url,baseUrl } from '../ApiUrls'
export const loginRequest = () => {
  return {
    type: types.FETCHING_USER_LOGIN_DETAILS_REQUEST,
  };
};

export const loginSuccess = (userData) => {
  return {
    type: types.FETCHING_USER_LOGIN_DETAILS_SUCCESS,
    payload: userData,
  };
};

export const loginFailure = (error) => {
  return {
    type: types.FETCHING_USER_LOGIN_DETAILS_FAILURE,
    payload: error,
  };
};

export const loginFunction = (inputData) => {
  return (dispatch) => {
    dispatch(loginRequest());

    // Make your API call using Url and baseUrl
    fetch(baseUrl + Url.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Dispatch loginSuccess with the received user data
        dispatch(loginSuccess(data));
      })
      .catch((error) => {
        // Dispatch loginFailure with the error message
        dispatch(loginFailure(error.message));
      });
  };
};
