import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <div className='w-10/12 m-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
  )
}

export default App
