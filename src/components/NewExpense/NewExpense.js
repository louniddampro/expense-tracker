import '../../style/NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

	//Props
	const {newExpenseHandler, newExpense, addExpense, expenseDate, onExpenseDateChange} = props

	return(
		<div className='new-expense'>
			<ExpenseForm newExpenseHandler={(e) => {newExpenseHandler(e)} } newExpense={newExpense} addExpense={addExpense} onExpenseDateChange={onExpenseDateChange}  />
		</div>
	)
}

export default NewExpense