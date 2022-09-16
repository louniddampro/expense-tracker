import "../css/ExpenseItem.css"

const ExpenseItem = (props) => {

	//variables
	const {expense} = props
	const {date, title, amount} = expense

	return(
		<div className="expense-item">
			<div>{date.toDateString()}</div>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">{amount}</div>
			</div>
		</div>
	)
}

export default ExpenseItem