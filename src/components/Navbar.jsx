import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = (props) => {
    return(
        <div className='navbar'>
            <h2 className='logo'>Albums</h2>
            <Link to={props.path}>
                <button>{props.page}</button>
            </Link>
        </div>
    )
}
