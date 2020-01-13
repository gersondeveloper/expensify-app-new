import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
import App from './App';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import * as serviceWorker from './serviceWorker';
import AppRouter from './routes/AppRoute';
import './firebase/firebase'



const store = configureStore()

const exp1 = {
    description: 'Water bill',
    amount: 4500,
}

const exp2 = {
    description: 'Gas bill',
    createdAt: 1000
}

const exp3 = {
    description: 'Rent',
    amount: 109500
}

store.dispatch(addExpense(exp1))
store.dispatch(addExpense(exp2))
store.dispatch(addExpense(exp3))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
    
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
