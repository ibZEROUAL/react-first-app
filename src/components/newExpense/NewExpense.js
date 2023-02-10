import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import {useState} from "react";

const NewExpense = (props) => {
    const [showAddingForm,setshowAddingForm] = useState(false);
    const saveExpenseHandler = (expenseObject) => {
      //console.log(expenseObject);
        const newExpenseObject = {
            ...expenseObject,
            id : Math.random().toString()
        }
      props.onAddExpense(newExpenseObject)
    }
    const showAddingFormHandler = () => {
      setshowAddingForm(true);
    }
    const hideAddingFormHandler = () => {
      setshowAddingForm(false);
    }

    return (
        <div className={'new-expense'}>
            {!showAddingForm && <button onClick={showAddingFormHandler}>Add New Expense </button>}
            {showAddingForm && <ExpenseForm onSaveNewExpense={saveExpenseHandler}/>}
            {showAddingForm && <button onClick={hideAddingFormHandler}>Cancel</button>}
        </div>
    );
}
export default NewExpense;
