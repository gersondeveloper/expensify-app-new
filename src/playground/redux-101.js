/* eslint-disable no-console */
import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1} = {}) => ({
	type: 'incrementBy',
	incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
	type: 'decrementBy',
	decrementBy
})

const resetCount = () => ({
	type: 'RESET'
})

const setCount = ({ count} = {}) => ({
	type: 'SET',
	count
})

const store = createStore(countReducer());

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(decrementCount(5));

store.dispatch(incrementCount());

store.dispatch(decrementCount(4));

store.dispatch(resetCount());

store.dispatch(setCount( {count: 266} ));

const countReducer = ( state = {count: 0}, action) => {
	switch(action.type){
		
		case "INCREMENT":
		
			return {
				count: state.count + incrementBy
			};
		case "DECREMENT":
			return {
				count: state.count - decrementBy
			};
		case "RESET":
			return {
				count: 100
			};
		case "SET":
			return {
				count: action.count
			};	
		default:
			return state;
}