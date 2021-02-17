import * as types from "../actions/types";

const initialState = {
    username: "",
    password: "",
    isLoggedIn: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN:
      return {
        ...state,
        username: action.username,
        password: action.password,
        isLoggedIn: true
      };
      case types.AUTH_LOGOUT:
          return {
            ...state,
            username: "",
            password: "",
            isLoggedIn: false
          }
    default:
      return state;
  }
};

export default authReducer;
