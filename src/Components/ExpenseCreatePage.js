import React from 'react'

const ExpenseCreatePage = () => (
    <div>
        <h1>Create expenses page</h1>
        <div className="container">
          <form>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" placeholder="Description"/>
              </div>
              <div className="form-group">
                <label htmlFor="note">Note</label>
                <input type="text" className="form-control" id="note" placeholder="Note"/>
              </div>
              <div className="form-group">
              <label className="form-control" htmlFor="amount">Amount</label>
                <input type="number" className="form-control" id="amount"/>
              </div>
              <div className="form-group">
              <label className="form-control" htmlFor="createdAt">Created at</label>
                <input type="date" className="form-control" id="createdAt" placeholder="Created at"/>
              </div>
              <button type="submit" className="btn btn-primary" >Add expense</button>
            </form>
        </div>
        
    </div>
)

export default ExpenseCreatePage