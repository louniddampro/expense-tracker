import { useEffect, useState } from "react";
import "../../style/Expenses.css"
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItems"
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

	//Props
	const {expensesArray} = props

	//States
	const [filteredYear, setFilteredYear] = useState("2019")

	//Hooks

	// useEffect(() => {
	// 	console.log(year);
	// }, [year])

	return(
		<div>
			<Card className="expenses">
				<ExpensesFilter filteredYear={filteredYear} onSetFilteredYear={setFilteredYear} />
				{
					expensesArray.map((item, index) => {
						return(
							<ExpenseItem key={index} expense={item} />
						)
					})
				}
			</Card>
		</div>
	)
}

export default Expenses;