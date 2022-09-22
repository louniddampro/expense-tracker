import './style/App.css';
import Expenses from "./components/Expenses/Expenses"
import NewExpense from './components/NewExpense/NewExpense';
import { useEffect, useState } from 'react';

const App = () => {
	
	//States
	const [expenseArray, setExpenseArray] = useState(
		[
			{
				id: 'e55',
				title: 'Toilet Paper',
				amount: 94.12,
				date: new Date(2019, 7, 14),
			},
			{
				id: 'e1',
				title: 'Books',
				amount: 94.12,
				date: new Date(2020, 7, 14),
			},
			{
				id: 'e2',
				title: 'New TV',
				amount: 799.49,
				date: new Date(2021, 2, 12)
			},
			{
				id: 'e3',
				title: 'Car Insurance',
				amount: 294.67,
				date: new Date(2021, 3, 28),
			},
			{
				id: 'e4',
				title: 'New Desk (Wooden)',
				amount: 450,
				date: new Date(2022, 5, 12),
			},
		]
	)
	
	const [newExpense, setNewExpense] = useState({
		id: Math.random().toString(),
		title:"",
		amount: "",
		date: new Date()
	})

	const [expenseDate, setExpenseDate] = useState(new Date()) 
	
	//Callbacks
	const newExpenseHandler = e => {
		e.preventDefault()

		const test = new Date(expenseDate)

		setNewExpense(prevState => ({...prevState, date: test.toISOString()}))
		setExpenseArray(prevState => ([...prevState, newExpense]))
		
		setNewExpense({
				id: "",
				title:"",
				amount: "",
				date: ""
			})
		
		setExpenseDate("")
	}

	return (
		<div>
			<NewExpense newExpenseHandler={e => { newExpenseHandler(e) }} newExpense={newExpense} addExpense={setNewExpense} expenseDate={expenseDate} onExpenseDateChange={setExpenseDate} />
			<Expenses expensesArray={expenseArray} />
		</div>
	);
}
export default App