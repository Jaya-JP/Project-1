import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import Order from '../pages/order/Order'
import Login from './Login/Login'
import MyOrder from '../pages/MyOrders/MyOrder'
import Verify from '../pages/verify/Verify'
const RouterCom = () => {

  const [sLogin, setSLogin] = useState(false)
  return (
    <>
    
    {sLogin? <Login setSLogin={setSLogin} /> : <></>}
    <div className='ro'>
        <BrowserRouter>
        <Navbar setSLogin={setSLogin} />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/order' element={ <Order /> } />
            <Route path='/verify' element={ <Verify /> } />
            <Route path='/myorders' element={ <MyOrder /> } />
        </Routes>
        </BrowserRouter>
    </div>
    </>
  )
}

export default RouterCom
