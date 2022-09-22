import { useEffect, useState } from "react";
import "../../style/Expenses.css"
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItems"
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

	//Props
	const {expensesArray} = props
	
	//States
	const [filteredYear, setFilteredYear] = useState("2022")
	let filteredArray = expensesArray.filter(item =>  (item.date.getFullYear().toString() === filteredYear))

	return(
		<li>
			<Card className="expenses">
				<ExpensesFilter filteredYear={filteredYear} onSetFilteredYear={setFilteredYear} />
				<ExpensesChart expenses={filteredArray} />
				<ExpensesList filteredYear={filteredYear} expensesArray={expensesArray} />
			</Card>
		</li>
	)
}

export default Expenses;