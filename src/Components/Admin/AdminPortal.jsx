import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import Users from '../Users'
import ReadBooks from '../ReadBooks'
import Addbooks from './Addbooks'
import AddUsers from './AddUsers'

const AdminPortal = () => {
  return (
    <div>
      <div className="adminPortal"><Navbar />
        <Routes>
          <Route element={ <Home/>} path='/' />
          <Route element={ <Books/>} path='/books' />
          <Route element={ <Users/>} path='/users' />
          <Route element={ <ReadBooks/>} path='/readbook/:id' />
          <Route element={ <Addbooks/>} path='/addbooks' />
          <Route element={ <AddUsers/>} path='/addusers/' />
          </Routes>
      </div>
    </div>
  )
}

export default AdminPortal
