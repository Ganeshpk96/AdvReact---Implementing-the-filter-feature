import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./Card";
import "./Expenses.css";

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2020");
	const result = props.result;
	const filterChangedHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = result.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});
	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangedHandler}
				/>

				{filteredExpenses.map((item, index) => {
					return (
						<ExpenseItem
							key={index}
							title={item.title}
							amount={item.amount}
							date={item.date}
						/>
					);
				})}
			</Card>
		</div>
	);
}

export default Expenses;
