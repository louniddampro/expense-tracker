import { useState } from 'react'
import '../../style/ExpenseForm.css'

const ExpenseForm = (props) => {

	//Props
	const {
		newExpenseHandler,
		newExpense,
		addExpense,
		// expenseDate,
		onExpenseDateChange,
		onShowForm
		} = props

	//States
	const [formatDate, setFormatDate] = useState("")

	return(
		<form>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					{/* <input type="text" onChange={(e) => {addExpense({...newExpense, title: e.target.value})}} /> */}
					<input
					type="text"
					value={newExpense.title}
					onChange={e => { addExpense(prevState => ({...prevState, title: e.target.value}) ) }} />
				</div>

				<div className='new-expense__control'>
					<label>Amount</label>
					{/* <input type="number" min="0.01" step="0.01" onChange={(e) => {addExpense({...newExpense, amount: e.target.value})}} /> */}
					<input
					type="number"
					value={newExpense.amount}
					min="0.01"
					step="0.01"
					onChange={e => { addExpense(prevState => ({...prevState, amount: e.target.value}) ) }} />
				</div>

				<div className='new-expense__control'>
					<label>Date</label>
					<input
					type="date"
					value={formatDate}
					min="2021-01-01"
					max="2023-12-31"
					onChange={e => { {onExpenseDateChange(e.target.value); setFormatDate(e.target.value) }}} 
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button onClick={() => {onShowForm(false)}}>Cancel</button>
				<button type="submit" onClick={e => { {newExpenseHandler(e); setFormatDate("")}; onShowForm(false) }}>Add expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm