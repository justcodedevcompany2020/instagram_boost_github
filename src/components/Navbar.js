import React, { useState } from 'react'
import './navbar.css'
import Hamburger from './Hamburger/Hamburger'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faXmark } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
    const [click, setClick] = useState(false);

    const closeMenu = () => setClick(false);
    const [open, setOpen] = useState(false)
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
                <span className='login-span'>
                    <button className='login'>Log In</button>
                </span>

                {open ?
                    <span className='hamburger' onClick={() => {
                        setOpen(!open)
                    }}>
                        <div className='icona'>
                            <FontAwesomeIcon icon={faXmark } />
                            {/* <FontAwesomeIcon icon="fa-thin fa-xmark" /> */}
                        </div>

                    </span>
                    :
                    <span className='hamburger' onClick={() => {
                        setOpen(!open)
                    }} >
                        <div className='icona' >
                            <RxHamburgerMenu color='white' />
                        </div>       </span>
                }

                {open && <Hamburger />}
            </ul>


        </div>
    )
}

export default Navbar
