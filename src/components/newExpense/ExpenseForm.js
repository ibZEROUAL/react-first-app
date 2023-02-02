import {useState} from "react";

import "./NewExpense.css";
const ExpenseForm = () => {
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
  return (
      <form>
        <div className={'new-expense__controls'}>
          <div className={'new-expense__control'}>
              <label>Title</label>
              <input type={'text'} onChange={titleInputHandler}/>
          </div>
            <hr/>
          <div className={'new-expense__control'}>
              <label>Amount</label>
              <input type={'number'} onChange={amountInputHandler}/>
          </div>
            <hr/>
          <div className={'new-expense__control'}>
              <label>Date</label>
              <input type={'date'} onChange={dateInputHandler}/>
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
