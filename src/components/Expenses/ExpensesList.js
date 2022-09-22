import "../../style/ExpensesList.css"
import ExpenseItem from "./ExpenseItems"

const ExpensesList = (props) => {

	const {filteredYear, expensesArray} = props

	return(
		<div>
			{
				expensesArray.filter(item =>  (item.date.getFullYear().toString() === filteredYear)).length === 0 ?
				<p style={{ color: "white" }}>No expenses in {filteredYear}</p>
				:
				expensesArray.filter(item =>  (item.date.getFullYear().toString() === filteredYear)).map((item) => (
					<ul className="expense-list" key={item.id}>
						<ExpenseItem key={item.id} expense={item} />
					</ul>
				))
			}
		</div>
	)
}

export default ExpensesList