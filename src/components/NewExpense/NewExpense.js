import '../../style/NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'


const NewExpense = (props) => {

	//Props
	const {newExpenseHandler, newExpense, addExpense, expenseDate, onExpenseDateChange} = props

	//states
	const [showForm, setShowForm] = useState(false)


	return(
		<div className='new-expense'>
			{
				showForm ? 
				<ExpenseForm
				newExpenseHandler={(e) => {newExpenseHandler(e)} }
				newExpense={newExpense}
				addExpense={addExpense}
				showForm={showForm}
				onShowForm={setShowForm}
				onExpenseDateChange={onExpenseDateChange} />
				:
				<button onClick={() => {setShowForm(true)}}>Add an expense</button>
			}
		</div>
	)
}

export default NewExpense