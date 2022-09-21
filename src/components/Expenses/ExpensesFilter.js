import "../../style/ExpensesFilter.css"

const ExpensesFilter = (props) => {

	const {filteredYear, onSetFilteredYear} = props

	const options = [
		{
			value: "2019"
		},
		{
			value: "2020"
		},
		{
			value: "2021"
		},
		{
			value: "2022"
		},
		{
			value: "2023"
		},
	]

	return(
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select
				value={filteredYear}
				onChange={e => { onSetFilteredYear(e.target.value) }}>
					{
						options.map((item, index) => {
							return(
								<option value={item.value} key={index}>{item.value}</option>
							)
						})
					}
				</select>
			</div>
	  </div>
	)
}

export default ExpensesFilter