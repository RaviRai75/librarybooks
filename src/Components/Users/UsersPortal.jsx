import React from 'react'
import Navbar from '../Navbar'
import Home from '../Home'
import Books from '../Books'
import ReadBooks from '../ReadBooks'
import { Route, Routes } from 'react-router-dom'
import Users from '../Users'
import AddCart from './AddCart'

const UsersPortal = () => {
  return (
      <>
      <Navbar />
      <Routes>
          <Route element={ <Home/>} path='/' /> 
           <Route element={ <Books/>} path='/books' />
        <Route element={<ReadBooks />} path='/readbook/:id' />
        <Route element={ <Users/>} path='/users' />
        <Route element={ <AddCart/>} path='/cartitems' />

          </Routes>
      </>
  )
}

export default UsersPortal
