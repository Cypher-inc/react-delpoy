import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  let emptyVar = <p>No expense Data found</p>;

  if (props.item.length > 0) {
    emptyVar = props.item.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return(
      [emptyVar]
  )
}
export default ExpenseList;

// import React from 'react';

// import ExpenseItem from './ExpenseItem';

// const ExpensesList = (props) => {
//   if (props.item.length === 0) {
//     return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
//   }

//   return (
//     <ul className='expenses-list'>
//       {props.item.map((expense) => (
//         <ExpenseItem
//           key={expense.id}
//           title={expense.title}
//           amount={expense.amount}
//           date={expense.date}
//         />
//       ))}
//     </ul>
//   );
// };

// export default ExpensesList;
