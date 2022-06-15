import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  ////////Other way of doing the below/////////
  // const [userInput, setUserInput]  = useState({
  //   titleTxt: '',
  //   amount: '',
  //   date: '',
  // });

  // const [titleTxt, setTitle1] = useState('');
  // const titleChangeHand = (event) => {
  //     setUserInput((prevState) => {
  //       return{
  //         ...prevState,
  //         titleTxt: event.target.value
  //       }
  //     });
  // };

  ////////////////Event Listener///////////////
  const [titleTxt, setTitle1] = useState("");
  const titleChangeHand = (event) => {
    // console.log(titleTxt);
    setTitle1(event.target.value);
  };

  const [amount, setAmount] = useState("");
  const amountChangeHand = (event) => {
    // console.log(amount);
    setAmount(event.target.value);
  };

  // var am1= '' //Can Also be done like this
  // const amountChangeHand = (event) =>{
  //     am1 += event.target.value
  //     console.log(am1);
  // }

  const [date, setDate] = useState("");
  const dateChangeHand = (event) => {
    // console.log(date);
    setDate(event.target.value);
  };

  /////////Form onSubmit////////////
  // var form = document.querySelector('form');
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: titleTxt,
      amount: amount,
      date: new Date(date),
    };
    
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData)
    setTitle1('');
    setAmount('');
    setDate('');
  };


  // const cancelClicked = (event) => {
  //   event.preventDefault();
    
  //   props.onClickCancelVal()
  // }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHand}
            value={titleTxt}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHand}
            value={amount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHand}
            value={date}
          ></input>
        </div>
        
        {/* <div className="new-expense__actions">
          <button type="cancel" onClick={cancelClicked} >Cancel</button>
        </div>
         */}
        <div className="new-expense__actions">
        <button type="cancel" onClick={props.onClickCancelVal} >Cancel</button>
          <button type="submit">Add Expense!</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
