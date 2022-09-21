import './style/App.css';
import Expenses from "./components/Expenses/Expenses"
import NewExpense from './components/NewExpense/NewExpense';
import { useEffect, useState } from 'react';

const App = () => {
	
	//States
	const [expenseArray, setExpenseArray] = useState(
		[
			{
				id: 'e1',
				title: 'Toilet Paper',
				amount: 94.12,
				date: new Date(2020, 7, 14),
			},
			{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
			{
				id: 'e3',
				title: 'Car Insurance',
				amount: 294.67,
				date: new Date(2021, 2, 28),
			},
			{
				id: 'e4',
				title: 'New Desk (Wooden)',
				amount: 450,
				date: new Date(2021, 5, 12),
			},
		]
	)
	
	const [newExpense, setNewExpense] = useState({
		id: Math.random().toString(),
		title:"",
		amount: "",
		date: ""
	})
	
	//Callbacks
	
	// const newExpenseHandler = (e) => {
	// 	e.preventDefault()
	// 	setExpenseArray([...expenseArray, newExpense])
	// }

	const newExpenseHandler = (e) => {
		e.preventDefault()
		setExpenseArray((prevState) => {
			return [...prevState, newExpense]
		})
	}
	
	useEffect(() => {
		console.log(expenseArray);
		//Fields Reset after submit
		setNewExpense({
			id: Math.random().toString(),
			title:"",
			amount: "",
			date: ""
		})
	}, [expenseArray])
	
	return (
		<div>
			<NewExpense newExpenseHandler={(e) => { newExpenseHandler(e) }} newExpense={newExpense} addExpense={setNewExpense} />
			<Expenses expensesArray={expenseArray} />
		</div>
	);
}
export default App