import React from 'react'

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: 0
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
          }
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <form>
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
                                type="button" 
                                className="btn btn-primary">
                                    Add expense
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
} 
