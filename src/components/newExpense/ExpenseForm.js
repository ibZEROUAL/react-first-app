import {useState} from "react";

import "./NewExpense.css";
const ExpenseForm = (props) => {
     const [enteredTitle,setEnteredTitle] = useState('');
     const [enteredAmount,setEnteredAmount] = useState('');
     const [enteredDate,setEnteredDate] = useState('');

  /*  const [userInput,setUserInput] = useState({
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : '',
    })*/


    const titleInputHandler = (event) => {
      setEnteredTitle(event.target.value);
      //console.log(event.target.value);
 /*       setUserInput((prevState)=>{
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        })*/
    }
    const amountInputHandler = (event) => {
     setEnteredAmount(event.target.value);
    }
    const dateInputHandler = (event) => {
      setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }
        //console.log(expenseData);
        props.onSaveNewExpense(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

  return (
      <form onSubmit={submitHandler}>
        <div className={'new-expense__controls'}>
          <div className={'new-expense__control'}>
              <label>Title</label>
              <input type={'text'} onChange={titleInputHandler} value={enteredTitle}/>
          </div>
            <hr/>
          <div className={'new-expense__control'}>
              <label>Amount</label>
              <input type={'number'} onChange={amountInputHandler} value={enteredAmount}/>
          </div>
            <hr/>
          <div className={'new-expense__control'}>
              <label>Date</label>
              <input type={'date'} onChange={dateInputHandler} value={enteredDate}/>
          </div>
            <hr/>
        </div>
          <div>
              <button className={'new-expense__actions'}>Add Expense</button>
          </div>
      </form>
  );
}
export default ExpenseForm;
