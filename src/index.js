import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import * as serviceWorker from './serviceWorker';


const store = configureStore()

const exp1 = {
    description: 'Water bill',
    note: 'bill',
    amount: 50,
    createdAt: 100
}

const exp2 = {
    description: 'Gas bill',
    note: 'bill',
    amount: 50,
    createdAt: 100
}

store.dispatch(addExpense(exp1))
store.dispatch(addExpense(exp2))
store.dispatch(setTextFilter('water'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
