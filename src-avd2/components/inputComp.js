import React, { useEffect, useRef, useImperativeHandle} from "react";

const InputComp = React.forwardRef((props, ref) => {
  // console.log("Hello World");
  const inputRef = useRef();

  // useEffect(()=>{
  //     inputRef.current.focus()
  // },[])

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      activate: activate,
    };
  });

  return (
    <>
      <div
        className={`${props.pClass.control} ${
          props.pIsValid === false ? props.pClass.invalid : ""
        }`}
      >
        <label htmlFor={props.pName}>{props.pName}</label>
        <input
          type={props.pName}
          id={props.pName}
          value={props.pValue.value}
          onChange={props.pChange}
          onBlur={props.pOnBlur}
          ref={inputRef}
        />
      </div>
      {/* <div
       className={`${props.pClass.control} ${
         props.pPass.isValid === false ? props.pClass.invalid : ""
       }`}
     >
       <label htmlFor="password">Password</label>
       <input
         type="password"
         id="password"
         value={props.pPass.value}
         onChange={props.pPassChange}
         onBlur={props.pPassValid}
       />
     </div> */}
    </>
  );
});

export default InputComp;
