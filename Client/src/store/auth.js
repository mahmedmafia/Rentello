import axios from "axios";

const initailState = {
  user: null,
  isAuthenticated: false,
  isAdmin: false,
  token: null,
  expiresIn: null,
  error: null,
};
const authActionTypes = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  SIGN_UP_REQUEST:"SIGN_UP_REQUEST",
  SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",
  SIGN_UP_FAIL:"SIGN_UP_FAIL",
  LOGUT: "LOGUT",
};
const localStorageItem = JSON.parse(localStorage.getItem("auth"));
// if (localStorageItem) {
//   localStorageItem["isAuthenticated"] = true;
// }

const authState = localStorageItem || initailState;
export const authActions = {
  loginRequest: () => {
    return { type: authActionTypes.LOGIN_REQUEST };
  },
  loginSuccess: (payload) => {
    return { type: authActionTypes.LOGIN_SUCCESS, payload };
  },
  loginFail: (payload) => {
    return { type: authActionTypes.LOGIN_FAIL, payload };
  },
  signUpRequest: () => {
    return { type: authActionTypes.SIGN_UP_REQUEST };
  },
  signUpSuccess: (payload) => {
    return { type: authActionTypes.SIGN_UP_SUCCESS, payload };
  },
  signUpFail: (payload) => {
    return { type: authActionTypes.SIGN_UP_FAIL, payload };
  },
  logout: () => {
    return { type: authActionTypes.LOGUT };
  },
};
export const authReducer = (state = authState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        error: null,
      };
    case authActionTypes.LOGIN_SUCCESS:
      action.payload["isAuthenticated"] = true;
      localStorage.setItem("auth", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        token: action.payload.token,
        expiresIn: action.payload.expiresIn,
        isAdmin: action.payload.expiresIn,
        error: null,
      };
    case authActionTypes.LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
      case authActionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
      case authActions.signUpSuccess:
        return {
          ...state,
          error:null,
        }
    case authActionTypes.LOGUT:
      localStorage.clear();
      return {};
    default:
      return state;
  }
};
export const loginEffect = (email, password) => {
  return (dispatch) => {
    dispatch(authActions.loginRequest());
    axios({
      method: "post",
      url: "http://localhost:8080/auth/login",
      data: { email, password },
    })
      .then((result) => {
        // console.log(result.data);
        dispatch(authActions.loginSuccess(result.data));
      })
      .catch((error) => {
        dispatch(authActions.loginFail(error.response.data.message));
      });
  };
};

export const signUpEffect = (email, password) => {
  return (dispatch) => {
    dispatch(authActions.signUpRequest());
    axios({
      method: "post",
      url: "http://localhost:8080/auth/signup",
      data: { email, password },
    })
      .then((result) => {
        dispatch(authActions.signUpSuccess())
      dispatch(loginEffect(email,password));
      })
      .catch((error) => {
        console.log(error.response.data.message)
        dispatch(authActions.signUpFail(error.response.data.message));
      });
  };
};
