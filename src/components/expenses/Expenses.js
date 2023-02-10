import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('');
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    }

    const expensesFilteredByYear = props.items.filter((expense)=>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className={'expenses'}>
            <ExpenseFilter selected={filteredYear} onChangeExpenses={filterChangeHandler}/>
            <ExpensesChart expenses={expensesFilteredByYear}/>
            <ExpensesList items={expensesFilteredByYear} />
        </Card>
    );
}
export default Expenses;
