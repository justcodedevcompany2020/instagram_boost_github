import React from 'react'
import './navbar.css'
import {RxHamburgerMenu} from 'react-icons/rx'


function Navbar() {
    return (
        <div className='navbar'>
            <div className='wh'>
                <p>WH</p>
            </div>
            <ul>
                <li>Trial</li>
                <li>Comments</li>
                <li>Followers</li>
                <li>Likes</li>
                <li>FAQ</li>
                <span>
                    <button className='login'>Log In</button>
                    <button className='hamburger'><RxHamburgerMenu/></button>

                </span>
            </ul>


        </div>
    )
}

export default Navbar
