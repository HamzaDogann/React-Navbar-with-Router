import React from 'react'
import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className='title'>Website</Link>
            <ul>
                <li>
                <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar