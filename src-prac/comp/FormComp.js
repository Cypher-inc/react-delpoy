import { useState } from "react";
import FormModal from "./FormModal";

const FormComp = (props) => {
  /////////username/////////
  const [userTxt, setUserTxt] = useState("");

  const userNameChange = (event) => {
    setUserTxt(event.target.value);
    // console.log(event.target.value);
  };

  /////////////age////////////
  const [userAge, setUserAge] = useState("");
  const userAgeChange = (event) => {
    setUserAge(event.target.value);
    // console.log(event.target.value);
  };

  ////////error///////
  const [error, setError] = useState();
  const submitHandler = (event) => {
    event.preventDefault();
    if (userTxt.trim() === "" || userAge.trim() === "") {
      //   alert("Please enter a valid input!");
      setError({Title: "Invalid Input!", 
      Body: 'Please enter a valid input!'});
 
    } 
    else if(userAge < 0){
      setError({ Title: "Invalid Input!", 
    Body: 'Age cannot be less than 0!'});
    }
    else{
      const userData = {
        Name: userTxt,
        Age: userAge,
      };
      props.onSaveData(userData);
      setUserTxt("");
      setUserAge("");
    }
  };

  const errHandler = () =>{
   setError(null)
  }

  return (
    <div className="form1 col-md-8 col-8 pt-3 pb-3 ">
      {/* {error ? <FormModal onConfirm={errHandler}></FormModal> : ''} */}
      {error && <FormModal onConfirm={errHandler} formTitle={error}></FormModal>}

      <form onSubmit={submitHandler}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userTxt}
            onChange={userNameChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Age(Years)
          </label>
          <input
            type="age"
            class="form-control"
            id="exampleInputPassword1"
            value={userAge}
            onChange={userAgeChange}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Add User
        </button>
      </form>

      {/* <div className="card1 mt-4">
        <div class="card">
          <div class="card-body">{userTxt} {userAge}</div>
        </div>
      </div> */}

      {/* ///////////// */}
    </div>
  );
};

export default FormComp;
