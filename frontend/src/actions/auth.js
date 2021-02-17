import * as types from "./types";
import { incrementProgress, decrementProgress } from "./progress";
import history from "../history";

const userLogin = (username,password) => ({
  type: types.AUTH_LOGIN,
    username,
    password,
});

const userLogout = () => ({
    type: types.AUTH_LOGOUT, 
});

const LoginRequest = username =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      username === "foo" ? resolve(username) : reject("No such user");
    }, 1000),
  );

export const doLogin = username => async dispatch => {
  dispatch(incrementProgress());
  try {
      const userResponse = await LoginRequest(username);
    //take response from LoginRequest, dispatch it with userLogin
    dispatch(userLogin(userResponse));
    history.push("/dashboard");
  } catch (error) {
    alert(error);
  } finally {
    dispatch(decrementProgress());
  }
};

export const doLogout = () => dispatch => {
    //in JWT, only need to clear local storage here.
    //the reducer is setting the isLoggedIn bool to false.
  dispatch(userLogout());
};
