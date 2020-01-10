import React from 'react'
import { DateRangePicker } from 'react-dates'
import { connect } from 'react-redux'
import { sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate } from '../actions/filters'

class ExpenseListFilters extends React.Component{
    
   state = {
    focused: null
   }

   onDatesChange = ( { startDate, endDate} ) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    render() {
        return (
            <div>
        <input type='text' value = { this.props.filters.text } onChange = {(e) => {
            this.props.dispatch(setTextFilter(e.target.value))
        }} />
        <select 
            value = { this.props.filters.sortBy } 
            onChange = {(e) => {
            switch(e.target.value){
                case 'date':
                    this.props.dispatch(sortByDate())
                    break

                case 'amount':
                    this.props.dispatch(sortByAmount())
                    break

                default:
                    this.props.dispatch(sortByDate())
            }

        }}>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>

        <DateRangePicker
            startDate = { this.props.filters.startDate }
            endDate = { this.props.filters.endDate }
            onDatesChange = { this.onDatesChange }
            focusedInput = { this.state.focused }
            onFocusChange = {focused => this.setState({ focused })}
            numberOfMonths = {1}
            isOutsideRange = { () => false }
            showClearDates = { true }
        />

    </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      filters: state.filters
    };
  };

export default connect (mapStateToProps)(ExpenseListFilters)