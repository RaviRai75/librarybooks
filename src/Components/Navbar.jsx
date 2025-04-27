import React from 'react'
import './../assets/Styles/navbar.css'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  let loc = useLocation()
  let bool = loc.pathname.startsWith('/adminportal')
  return (
      <>
          <div className="navbar">
              <div className="logo">LOGO</div>
        <div className="links">
          {
            bool ?
            <ul>
            <li><NavLink to="/adminportal">Home</NavLink></li>
            <li><NavLink to="/adminportal/books">Books</NavLink></li>
            <li><NavLink to="/adminportal/addbooks">Add Books</NavLink></li>
            <li><NavLink to="/adminportal/users">Users</NavLink></li>
            <li><NavLink to="/adminportal/addusers">Add Users</NavLink></li>
            <li><NavLink to="/">Logout</NavLink></li>
  </ul>
  :
  <ul>
            <li><NavLink to="/usersportal/">Home</NavLink></li>
            <li><NavLink to="/usersportal/books">Books</NavLink></li>          
            <li><NavLink to="/usersportal/users">Users</NavLink></li>                 
            <li><NavLink to="/usersportal/cartitems">Cart Items</NavLink></li>                 
            <li><NavLink to="/">Logout</NavLink></li>
  </ul>
          }
                
                 
              </div>
      </div>
      </>
  )
}

export default Navbar
