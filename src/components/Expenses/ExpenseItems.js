import "../../style/ExpenseItem.css"
import ExpenseDate from "./Expensedate"
import Card from "../UI/Card"
import { useState } from "react"

const ExpenseItem = (props) => {

	//Props
	const {expense} = props
	const {date, title, amount} = expense

	//Hooks
	const [expenseTitle, setExpenseTitle] = useState(title)

	//Callbacks

	return(
		<Card className="expense-item">
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{expenseTitle}</h2>
				<div className="expense-item__price">{amount}</div>
			</div>
			<button onClick={ () => setExpenseTitle("Yoo") }>Change title</button>
		</Card>
	)
}

export default ExpenseItem