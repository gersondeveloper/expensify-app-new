import {  createStore, combineReducers } from "redux";
import uuid from 'uuid'
import { getAllByPlaceholderText } from "@testing-library/react";

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
const sortByDate = (date = undefined) => ({
	type: 'SORT_BY_DATE',
	date
})

//SORT_BY_AMOUNT

const sortByAmount = (amount = 0) => ({
	type: 'SORT_BY_AMOUNT',
	amount
})

//SET_START_DATE
const setStartDate = (startDate = '') => ({
	type: 'SET_START_DATE',
	startDate
})

//SET_END_DATE
const setEndDate = (endDate = '') => ({
	type: 'SET_END_DATE',
	endDate
})

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
	
	case 'SORT_BY_DATE':
		return {
			...state,
			date: action.date
		}

	case 'SORT_BY_AMOUNT':
		return {
			...state,
			amount: action.amount
		}

	case 'SET_START_DATE':
		return {
			...state,
			startDate: action.startDate
		}

	case 'SET_END_DATE':
		return {
			...state,
			endDate: action.endDate
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
store.dispatch(setTextFilter('rent'))
store.dispatch(sortByDate('2019-01-01'))
store.dispatch(sortByAmount(50))
store.dispatch(setStartDate('2019-01-01'))
store.dispatch(setEndDate('2019-01-10'))


console.log(store.getState())