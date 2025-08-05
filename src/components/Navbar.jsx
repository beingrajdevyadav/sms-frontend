import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className='top-nav'>
                <div className="logo">
                    <h1>SMS</h1>
                </div>

                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={'/create'}>Create</NavLink></li>
                    <li><NavLink to={'/edit'}>Edit</NavLink></li>
                    <li><NavLink to={'/delete'}>Delete</NavLink></li>
                </ul>
            </div>


            <div className="bottom-nav">
                <p>SMS Powered By Rajdev Yadav </p>
            </div>
        </div>
    )
}

export default Navbar