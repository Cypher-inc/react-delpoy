import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (dataRecieved) => {
    const expenseData = {
      id: Math.random().toString(),
      ...dataRecieved,
    };
    // console.log(expenseData);
    props.onNewExpense(expenseData);
  };

  const [clickVal, setClickVal] = useState(false);
  const btnClicked = () => {
    setClickVal(true);
  };

  const cancelClicked = () => {
        setClickVal(false)
  }

  return (
    <div className="new-expense">
      {!clickVal ? (
        <button onClick={btnClicked}>Add New Expense</button>
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClickCancelVal={cancelClicked}/>
      )}
    </div>
  );
}

export default NewExpense;
