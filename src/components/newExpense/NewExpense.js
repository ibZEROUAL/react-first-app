import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseHandler = (expenseObject) => {
      //console.log(expenseObject);
        const newExpenseObject = {
            ...expenseObject,
            id : 'e5'
        }
      props.onAddExpense(newExpenseObject)
    }

    return (
        <div className={'new-expense'}>
            <ExpenseForm onSaveNewExpense={saveExpenseHandler}/>
        </div>
    );
}
export default NewExpense;
