import '../../style/NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

	//Props
	const {newExpenseHandler, newExpense, addExepense} = props

	return(
		<div className='new-expense'>
			<ExpenseForm newExpenseHandler={(e) => {newExpenseHandler(e)} } newExpense={newExpense} addExepense={addExepense} />
		</div>
	)
}

export default NewExpense