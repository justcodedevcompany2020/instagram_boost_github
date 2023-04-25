import React from 'react'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

function Layout() {
  return (
    <div>
      <Navbar/>
      <Footer/>
      <Outlet/>
    </div>
  )
}

export default Layout
