import * as types from "./types";
import { incrementProgress, decrementProgress } from "./progress";
import history from "../history";

const userLogin = username => ({
  type: types.AUTH_LOGIN,
  username,
});

const userLogout = () => ({
  type: types.AUTH_LOGOUT,
});

const fakeLoginRequest = username =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      username === "foo" ? resolve(username) : reject("No such user");
    }, 1000),
  );

export const doLogin = username => async dispatch => {
  dispatch(incrementProgress());
  try {
    const userResponse = await fakeLoginRequest(username);
    dispatch(userLogin(userResponse));
    history.push("/dashboard");
  } catch (error) {
    alert(error);
  } finally {
    dispatch(decrementProgress());
  }
};

export const doLogout = () => dispatch => {
  dispatch(userLogout());
};
