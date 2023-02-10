const ExpenseFilter = (props) => {
    const dropDownChangeHandler = (event) => {
         props.onChangeExpenses(event.target.value);
    }
    return (
        <div className={'expenses-filter'}>
            <div className={'expenses-filter__control'}>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    <option value='none'>year</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
}
export default ExpenseFilter;
