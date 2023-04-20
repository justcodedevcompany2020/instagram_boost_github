import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Layout from './container/Layout/Layout'
import Home from './container/Home/Home'

function Router() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element = {<Layout/>}>
 <Route path='/' element = {<Home/>}/>



    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default Router
