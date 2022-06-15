// import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpenseList from "./ExpenseList";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (eventData) => {
    console.log(eventData);
    setFilteredYear(eventData);
  };

  const filteredExpenses = props.item.filter((ex) => {
    return ex.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenseItem1">
      {/* <h2>Let's get started!</h2> */}
      {/* ///Calling function ExpenseItem/// */}
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* <ExpensesFilter onNewYear = {NewYear}></ExpensesFilter> */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      <ExpenseList item={filteredExpenses}></ExpenseList>
    </Card>
  );
}

export default Expense;
