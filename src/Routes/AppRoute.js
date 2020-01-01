import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from '../Components/Header'
import ExpenseCreatePage from '../Components/ExpenseCreatePage' 
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage'
import ExpenseEditPage from '../Components/ExpenseEditPage'
import HelpPage from '../Components/HelpPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={ExpenseDashboardPage} exact={true} />
                <Route path='/create' component={ExpenseCreatePage} />
                <Route path='/edit' component={ExpenseEditPage} />
                <Route path='/help' component={HelpPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter