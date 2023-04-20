import React from 'react'
import './navbar.css'

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
                    <button>Login</button>
                </span>
            </ul>


        </div>
    )
}

export default Navbar
