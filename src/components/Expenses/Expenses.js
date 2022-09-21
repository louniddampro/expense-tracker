import { useEffect, useState } from "react";
import "../../style/Expenses.css"
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItems"
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

	//Props
	const {expensesArray} = props
	
	//States
	const [filteredYear, setFilteredYear] = useState("2022")

	return(
		<div>
			<Card className="expenses">
				<ExpensesFilter filteredYear={filteredYear} onSetFilteredYear={setFilteredYear} />
				 {
					expensesArray.filter(item =>  (item.date.getFullYear().toString() === filteredYear)).map((item) => (
						<ExpenseItem key={item.id} expense={item} />
					))
				  }
			</Card>
		</div>
	)
}

export default Expenses;