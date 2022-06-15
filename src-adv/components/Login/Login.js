import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import InputComp from "../UI/Input";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //Woutout [] runs everytime, With [] only once, with []
  // [] and arguments(dependency) only when arguments changes
  useEffect(() => {
    console.log("Effect runnning");
    return () => {
      console.log("Effect Cleanup!"); //Triggers before useEffect
    };
  }, [enteredPassword]);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("Checking form validity");
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 500); //setting timeout and anonymous arrow function

  //   return () => {
  //     console.log("Clean up!");
  //     clearTimeout(identifier); //clearing the last timer
  //   };
  // }, [enteredEmail, enteredPassword]);
  //checkes if any of these have changed and only then executes the function
  //state update function , ie setFormIsValid may NOT be added

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <InputComp
          id="Email"
          label="Email"
          type="Email"
          emailIsValidProp={emailIsValid}
          enteredValue={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></InputComp>

        <InputComp
          id="Password"
          label="Password"
          type="Password"
          passwordIsValid={passwordIsValid}
          enteredValue={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></InputComp>

        {/* <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
