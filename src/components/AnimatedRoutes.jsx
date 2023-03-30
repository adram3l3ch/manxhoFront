import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from '../pages/Home'
import FilteredMenu from '../pages/FilteredMenu'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
import ForgotPassword from '../pages/ForgotPassword'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import OrderReview from '../pages/OrderReview'
import {AnimatePresence} from 'framer-motion'
import ChangePassword from '../pages/ChangePassword'
import OrderDetail from '../pages/OrderDetail'
import AllOrders from '../pages/AllOrders'
import Pages from '../pages/TextPages'


const AnimatedRoutes = () => {
    const location = useLocation()
  return (
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
        
            <Route path='/' exact element={<Home/>}/>
            <Route path='/t/:page' exact element={<Pages />}/>
        
            <Route path='/cat/:id' element={<FilteredMenu/>}/>

        
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/forgot_password' element={<ForgotPassword/>}/>
            <Route path ='/change_password/:token' element={<ChangePassword/>} />
            <Route path='/all-orders' element={<AllOrders/>}/>
            <Route path='order_detail/:orderId' element={<OrderDetail/>}/>


            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element ={<Checkout/>}/>
            <Route path='/order_review' element={<OrderReview/>}/>
            
        </Routes>
      </AnimatePresence>
  )
}

export default AnimatedRoutes