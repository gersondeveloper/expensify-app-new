import React from 'react'
import moment, { relativeTimeThreshold } from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'


export default class ExpenseForm extends React.Component {

constructor (props){
    super(props)

    this.state = {
        description: props.expense ? this.props.expense.description :  '',
        note: props.expense ? this.props.expense.note: '',
        amount: props.expense ? (props.expense.amount / 100).toString() : '',
        createdAt: props.expense ? moment(props.expense.createAt) : moment(),
        focused: false,
        error: undefined
    }
}

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
          }
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    onDateChange = (createdAt) => {
        if(createdAt)
            this.setState({ createdAt })
    }

    onSubmitForm = (e) => {
        e.preventDefault()
        if(!this.state.description || !this.state.amount)
            this.setState ({ error: 'Please enter a valid description and amount' })
        else   
            this.setState({ error: undefined})
            
            const obj = {
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10),
                createAt: moment().format('ll')
            }
        
        this.props.onSubmit(obj)
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <form onSubmit={this.onSubmitForm}>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input 
                                autoFocus 
                                type="text" 
                                className="form-control" 
                                id="description" 
                                placeholder="Description"
                                value={this.state.description}
                                onChange={this.onDescriptionChange}
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount">Amount</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="amount"
                                value={this.state.amount}
                                onChange={this.onAmountChange}/>
                        </div>

                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.focused}
                            onFocusChange={({ focused }) => this.setState({ focused })}
                            numberOfMonths={2}
                            isOutsideRange={() => false}
                        />

                        <div className="form-group">
                            <label htmlFor="note">Note</label>
                            <textarea 
                                className="form-control" 
                                id="note" 
                                placeholder="Expense note (optional)"
                                value={this.state.note}
                                onChange={this.onNoteChange}/>
                        </div>
                        <div>
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                >
                                    Add expense
                            </button>
                            { this.state.error && <p>{ this.state.error} </p>}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
} 
