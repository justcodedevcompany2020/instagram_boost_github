import React from 'react'
import './cards.css'

function Cards() {
    return (
        <div className='cards'>
            <div className='card card1'>
                <img src={require("../../public/images/Image (1).png")} alt="" />
                <p>You choose the <br /> service you need</p>   </div>
            <div className='card'>
                <img src={require("../../public/images/Image.png")} alt="" />
                <p>You choose the <br /> post for which you <br /> need the service</p>   </div>
            <div className='card card1'>
                <img src={require("../../public/images/image3.png")} alt="" />
                <p>You pay for the order, <br /> and the work begins</p>   </div>
        </div>
    )
}

export default Cards
