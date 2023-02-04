import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('');
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    }

    return (
        <Card className={'expenses'}>
            <ExpenseFilter selected={filteredYear} onChangeExpenses={filterChangeHandler}/>
            {props.items.map(expense => <ExpenseItem title={expense.title}
                                                     amount={expense.amount}
                                                     date={expense.date}/>)
            }
        </Card>
    );
}
export default Expenses;
