import '../../style/NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

	//Props
	const {newExpenseHandler, newExpense, addExpense} = props

	return(
		<div className='new-expense'>
			<ExpenseForm newExpenseHandler={(e) => {newExpenseHandler(e)} } newExpense={newExpense} addExpense={addExpense} />
		</div>
	)
}

export default NewExpense