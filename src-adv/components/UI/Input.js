import React from "react";
import classes from "../Login/Login.module.css";

const InputComp = (props) => {
  // const emailChangeFunc = () => {
  //     props.onEmailChange()
  // }
  // const blurFunc = (props) =>{
  //     props.onBlurChange()
  // }
  return (
    <React.Fragment>
      <div
        className={`${classes.control} ${
          props.IsValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.type}
          id={props.id}
          value={props.enteredValue}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>

      {/* Not needed */}
      {/* <div
          className={`${classes.control} ${
            props.passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={props.enteredPassword}
            onChange={props.test1}
            onBlur={props.test2}
          />
        </div> */}
    </React.Fragment>
  );
};

export default InputComp;
