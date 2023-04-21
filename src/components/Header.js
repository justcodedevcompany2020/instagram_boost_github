import React from 'react'

function Header() {
    return (
        <header>

            <h1>Instagram <br /> activity boost</h1>

            <button className='get-started'>Get Started</button>
            <div className='items'>
                <div className='item'>
                    <img className='menu-img' src='./images/menu.svg' alt='menu'></img>
                    <div className='texts'>
                        <h3>User-friendly <br /> interface</h3>
                        <p>Even a novice can <br /> use the service</p>

                    </div>
                </div>
                <div className='vertical-line'></div>                <div className='item'>
                    <img className='hand-img' src="./images/hand.svg" alt="hand" />
                    <div className='texts'>
                        <h3>Legit  and <br /> Safe</h3>
                        <p>We do not use <br /> automated tools. <br />
                            Our Clients pay for their <br /> posts to be shown in <br /> our network.
                        </p>
                    </div>
                </div>
                <div className='vertical-line'></div>
                <div className='item3 '>
                    <img className='book-img' src="./images/book.svg" alt="book" />
                    <div className='texts'>
                        <h3>High quality</h3>
                        <p>Accounts with avatars <br /> and publications</p>
                    </div>
                </div>
            </div>
            <h2 className='how-work'>How it works</h2>
        </header>
    )
}

export default Header
