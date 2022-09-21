import { useState } from 'react'
import '../../style/ExpenseForm.css'

const ExpenseForm = (props) => {

	//Props
	const {newExpenseHandler, newExpense, addExpense} = props

	//States
	const [formatDate, setFormatDate] = useState(new Date())

	//Callbacks
	const formatDateHandler = (e) => {
		setFormatDate(e)
		formatDate.toISOString()
		// addExpense({...newExpense, date: formatDate})
		addExpense((prevState) => {
			return {...prevState, date: formatDate}
		})
	}



	return(
		<form>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					{/* <input type="text" onChange={(e) => {addExpense({...newExpense, title: e.target.value})}} /> */}
					<input type="text" onChange={(e) => { addExpense((prevState) => { return {...prevState, title: e.target.value} }) }} />
				</div>

				<div className='new-expense__control'>
					<label>Amount</label>
					{/* <input type="number" min="0.01" step="0.01" onChange={(e) => {addExpense({...newExpense, amount: e.target.value})}} /> */}
					<input type="number" min="0.01" step="0.01" onChange={(e) => { addExpense((prevState) => { return {...prevState, amount: e.target.value} }) }} />
				</div>

				<div className='new-expense__control'>
					<label>Date</label>
					<input type="date" min="2021-01-01" max="2023-12-31" onChange={(e) => { formatDateHandler(e.target) }} />
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type="submit" onClick={(e) => { newExpenseHandler(e) }}>Add expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm