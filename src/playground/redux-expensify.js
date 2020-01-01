import {  createStore, combineReducers } from "redux";
import uuid from 'uuid'

//Configure reducers for all these actions
//ADD-EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});


//EDIT_EXPENSE
const editExpense = ({id, updates}) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
})
//SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
})

//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE


//Expense reducer

const expensesReducerDefaultState = [];

const expensesReducer = ( state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
		return [...state, action.expense]; 
	
		case 'REMOVE_EXPENSE':
		return state.filter (({ id }) => id !== action.id );
		
		case 'EDIT_EXPENSE':
		return state.map ((expense) => {
			if (expense.id === action.id) {
				return {...expense, ...action.updates}
			} else {
				return expense;
			}
		})
		default:
			return state;
	}
};



//Filter reducers

const filtersReducerDefaultState = { 
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = ( state = filtersReducerDefaultState, action) => {

	switch (action.type) {

	case 'SET_TEXT_FILTER':
		return {
			...state,
			text: action.text
		}

	default:
		return state;
	}

};

//Store creation

const store = createStore(combineReducers({
	expenses: expensesReducer,
	filters: filtersReducer
}
));

store.subscribe(() => {
	console.log(store.getState());
});

const exp1 = {
	description: 'Rent',
	amount: 100
}

const exp2 = {
	description: 'Coffee', 
	amount: 200
}

const exp3 = {
	description: 'Aluguel', 
	amount: 500
}

const expenseOne = store.dispatch(addExpense(exp1))
const expenseTwo = store.dispatch(addExpense(exp2))
store.dispatch(setTextFilter('coffee'))
const expenseThree = store.dispatch(addExpense(exp3))

//edit expense amount
store.dispatch(editExpense(expenseThree.expense.id, {amount:9999} ))
store.dispatch(setTextFilter('rent'))
