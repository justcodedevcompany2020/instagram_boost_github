import Header from '../../components/Header'
import './style.css'
import React from 'react'
import Cards from '../../components/Cards/Cards'

function Home() {
  return (
    <div className='homepage'>
      <Header/>
      <Cards/>
    </div>
  )
}

export default Home
