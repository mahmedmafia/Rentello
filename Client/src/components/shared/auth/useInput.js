import { useState } from "react";

export const useInput = (initalVal, valvalidatiorFn) => {
  const [val, setVal] = useState(initalVal);
  const [isTouched, setIsTouched] = useState(false);
  const valIsValid = valvalidatiorFn(val);
  const hasError = !valIsValid && isTouched;
  const [errMsg, setErrMsg] = useState("");
  const valChangeHanlder = (e) => {
    setErrMsg("");
    if (e.target.value.trim.lenth == 0) {
      setErrMsg("input Cant be empty");
    }
    setIsTouched(true);
    setVal(e.target.value);
  };
  const blurChangeHandler = (e) => {
    setIsTouched(true);
  };
  const inputReset = () => {
    setIsTouched(false);
    setVal("");
  };
  return {
    val,
    hasError,
    valIsValid,
    valChangeHanlder,
    blurChangeHandler,
    inputReset,
    errMsg
  };
};
