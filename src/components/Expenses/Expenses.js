import { useState } from "react";
import "../../style/Expenses.css"
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItems"

const Expenses = (props) => {

	//Props
	const {expensesArray} = props


	return(
		<Card className="expenses">
			{
				expensesArray.map((item, index) => {
					return(
						<ExpenseItem key={index} expense={item} />
					)
				})
			}
		</Card>
	)
}

export default Expenses;