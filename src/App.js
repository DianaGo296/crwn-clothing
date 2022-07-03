import React from 'react'
import { Home } from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation'
import { SignIn } from './pages/SignIn/SignIn'

export const Shop = () => {
  return <h1>SHOP PAGE</h1>
}

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}
