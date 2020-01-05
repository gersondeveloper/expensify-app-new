import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from '../components/Header'
import ExpenseCreatePage from '../components/ExpenseCreatePage' 
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import ExpenseEditPage from '../components/ExpenseEditPage'
import HelpPage from '../components/HelpPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={ExpenseCreatePage} />
                <Route path="/edit/:id" component={ExpenseEditPage} />
                <Route path="/help" component={HelpPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter