import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({title, icon}) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon} />
                {title}
            </h1>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                <a href='/about'>About</a>
                </li>
            </ul>            
        </nav>
    )
}

export default Navbar
