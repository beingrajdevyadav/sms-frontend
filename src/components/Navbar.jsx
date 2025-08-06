import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navbar.css'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='top-nav'>
                <div className="logo">
                    <h1>SMS</h1>
                </div>


                <ul>
                    <li><NavLink to={"/"}><i className="fa-solid fa-house-chimney-user"></i> Home</NavLink></li>
                    <li><NavLink to={'/create'}><i className="fa-solid fa-plus"></i> Add</NavLink></li>
                    <li><NavLink to={'/edit'}><i className="fa-solid fa-pen-to-square"></i> Edit</NavLink></li>
                    <li><NavLink to={'/delete'}><i className="fa-solid fa-trash"></i> Delete</NavLink></li>
                </ul>
            </div>


            <div className="bottom-nav">
                <p>SMS Powered By Rajdev Yadav </p>
            </div>
        </div>
    )
}

export default Navbar