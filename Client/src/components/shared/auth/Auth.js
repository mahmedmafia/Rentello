import { useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions, loginEffect, signUpEffect } from "../../../store/auth";
import { useInput } from "./useInput";
import classes from "./Auth.module.css";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
const initialForm = {
  isFormValid: true,
  formError: null,
};
const formReducer = (state = initialForm, action) => {
  switch (action.type) {
    case "setError":
      return { ...state, formError: action.payload, isFormValid: false };
    case "reset":
      return { ...state, isFormValid: false, formError: null };
    default:
      return state;
  }
};

export const Auth = () => {
  const [formState, dispatchForm] = useReducer(formReducer, initialForm);
  let query = new URLSearchParams(useLocation().search);
  const requestErrors = useSelector((state) => state.authState.error);
  useEffect(() => {
    if (requestErrors != null) {
      dispatchForm({ type: "setError", payload: requestErrors });
    }
  }, [requestErrors]);
  const [formType, setFormType] = useState();
  const isRegister = () => formType == "register";
  const isLogin = () => formType == "login";

  const dispatch = useDispatch();

  const {
    val: email,
    hasError: emailHasError,
    valIsValid: emailIsvalid,
    blurChangeHandler: emailBlurHandler,
    valChangeHanlder: emailChangeHandler,
    inputReset: emailReset,
  } = useInput("", (value) => value.trim().length >= 3 && value.includes("@"));
  const {
    val: password,
    hasError: passwordHasError,
    valIsValid: passwordIsValid,
    blurChangeHandler: passwordBlurHandler,
    valChangeHanlder: passwordChangeHandler,
    inputReset: passwordReset,
  } = useInput("", (value) => value.trim().length >= 6);
  const {
    val: password2,
    hasError: password2HasError,
    valIsValid: password2IsValid,
    blurChangeHandler: password2BlurHandler,
    valChangeHanlder: password2ChangeHandler,
    inputReset: password2Reset,
  } = useInput("", (value) => value == password && value.trim().length >= 6);
  useEffect(() => {
    emailReset();
    passwordReset();
    password2Reset();
    if (query.get("authType")) {
      setFormType(query.get("authType"));
    } else {
      setFormType("login");
    }
  }, [query.get("authType")]);

  const submissionHandler = (e) => {
    passwordBlurHandler();
    emailBlurHandler();
    e.preventDefault();

    dispatch({ type: "reset" });
    const formLoginIsValid = emailIsvalid && passwordIsValid;
    if (isLogin()) {
      if (formLoginIsValid) {
        dispatch(loginEffect(email, password));
      } else {
        dispatchForm({
          type: "setError",
          payload: "Complete the missing inputs to login",
        });
      }
    } else if (isRegister()) {
      password2BlurHandler();
      if (formLoginIsValid && password2IsValid) {
        dispatch(signUpEffect(email, password));
      } else {
        dispatchForm({
          type: "setError",
          payload: "Complete the missing inputs to login",
        });
      }
    }
  };
  return (
    <main className={classes.auth}>
      <section>
        <form
          onSubmit={submissionHandler}
          onBlur={() => {
            if (formState.formError != null) {
              setTimeout(() => {
                dispatchForm({ type: "reset" });
              }, 500);
            }
          }}
        >
          {!formState.isFormValid && (
            <p className={`${classes.errorText} ${classes.formError}`} >{formState.formError}</p>
          )}
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className={classes.errorText}>value Must Be email</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              minLength="5"
            />
            {passwordHasError && (
              <>
                {password.trim().length == 0 ? (
                  <p className={classes.errorText}>password required</p>
                ) : (
                  <p className={classes.errorText}>
                    password is short {password.trim().length}/6
                  </p>
                )}
              </>
            )}
          </div>
          {isRegister() && (
            <>
              <div className={classes.control}>
                <label htmlFor="password2">confirm password</label>
                <input
                  type="password"
                  id="password2"
                  value={password2}
                  onChange={password2ChangeHandler}
                  onBlur={password2BlurHandler}
                />
                {password2HasError && (
                  <p className={classes.errorText}>
                    Must be equal to password{" "}
                  </p>
                )}
              </div>
              <p className={classes.info}>
                Do you have account,
                <button
                  onClick={() => {
                    setFormType("login");
                  }}
                >
                  <Link to="/auth?authType=login">Login</Link>
                </button>{" "}
                Instead?
              </p>
              <button className={classes.authButton}>Register</button>
            </>
          )}

          {isLogin() && (
            <>
              <p className={classes.info}>
                First Time,
                <button
                  onClick={() => {
                    setFormType("register");
                  }}
                >
                  <Link to="/auth?authType=register">Register</Link>
                </button>
                Instead?
              </p>

              <button className={classes.authButton}>Login</button>
            </>
          )}
        </form>
      </section>
    </main>
  );
};

export default Auth;
