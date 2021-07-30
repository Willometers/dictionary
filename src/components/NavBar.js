import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {

render() {

    return(
        <div>
        <NavLink 
            to="/"
            exact
            style={{
                padding: '5px',
                background: 'red',
                color: 'white'
        }}>Home</NavLink>


        <NavLink
            to='/wordsearch'
            exact
            style={{
                padding: '5px',
                background: 'red',
                color: 'white'
        }}>Word Search</NavLink>

            <NavLink
            to='/thesaurussearch'
            exact
            style={{
                padding: '5px',
                background: 'red',
                color: 'white'
        }}>Thesaurus Search</NavLink>

        <NavLink
            to='/previoussaves'
            exact
            style={{
                padding: '5px',
                background: 'red',
                color: 'white'
        }}>Previously Saved Words</NavLink>

        </div>
        )
    }
}

export default NavBar


