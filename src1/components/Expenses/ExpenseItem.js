//componenet is just a js function
//components are just custom html elements
//alt shift f to format -- prettier
import React, {useState} from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


function Expenseitem(props){
const [title, setTitle] = useState(props.title);
//Returns an arr with 2 values
///Title is the og value and setTitle is the func that updates the value 
// let title = props.title
// console.log('Evaluated by React!');

const clickedFunc = () => {
  console.log(title);
  // title = 'Updated!';
  setTitle('Updated!')
  ///change does not occur instantly, but gets scheduled!
  if(title === 'Updated!') {
    setTitle('Not Updated!')
  }
}

  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"><p>${props.amount}</p></div>
      </div>
      {/* <button onClick={() => console.log('Button Clicked!')}>Change Title</button> */}
      {/* ////Do not add parenthesis to function! simply attach the name// */}
    </Card>
  );
}

export default Expenseitem;
