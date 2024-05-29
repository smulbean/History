import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav>
        <Link to="/History/" className="title">Grace Yin's Family</Link>
        <ul>
            <li> <Link to="/History/about">尹奕</Link> </li>
            <li> <Link to="/History/grandma">刘玳（奶奶）</Link></li>
            <li> <Link to="/History/grandpa">尹树新（爷爷）</Link> </li>
        </ul>
    </nav>
  )
}
