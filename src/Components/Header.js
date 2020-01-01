import React from 'react'
import {NavLink} from  'react-router-dom'

const Header = () => (
    <header>
        <NavLink to="/" exact={true} activeClassName="is-active">
            Home Page
        </NavLink>

        <NavLink to="/create" activeClassName="is-active">
            Create Expense Page
        </NavLink>

        <NavLink to="/edit" activeClassName="is-active">
            Edit Expense Page
        </NavLink>

		<NavLink to="/help" activeClassName="is-active">
            Help Page
        </NavLink>
    </header>
)

export default Header