import React from 'react'
import {Link} from 'react-router-dom';
import about from './Components/ContactForm'
const Menu = () => {
  return (
    <>
        <div className="MenuStyle">
            <ul>
                
                    <Link to="/">Home</Link>
                    <Link to={about}>About</Link>
                    <Link to="/contact">Services</Link>
                    <Link to="/contact">Contact</Link>
                
            </ul>
        </div>
    </>
  )
}

export default Menu