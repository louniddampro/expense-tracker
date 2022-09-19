import "../../style/ExpenseDate.css"

const ExpenseDate = (props) => {

	//Props
	const {date} = props

	//Variables
	const month = date.toLocaleString("en-US", { month: "long" })
	const day = date.toLocaleString("en-US", { day: "2-digit" })
	const year = date.getFullYear()

	return(
		<div className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-year">{year}</div>
			<div className="expense-date__day">{day}</div>
		</div>
	)
}

export default ExpenseDate