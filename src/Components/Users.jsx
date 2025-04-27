import axios from 'axios'
import React, { useState } from 'react'
import './../assets/Styles/users.css'
import { useLocation } from 'react-router-dom'

const Users = () => {
  let [users , setUsers]=useState([])
  let fetchUsers =async () => {
    let fetchUserData = await axios.get("http://localhost:4000/users")
   setUsers(fetchUserData.data)
  }
  fetchUsers()
  // console.log(users);
  const deleteUserData = async (id, username) => {
    let bool = window.confirm(`Are You Sure to delete ${username}`);
    if (bool) {
      const response = await fetch(`http://localhost:4000/users/${id}`, { method: 'DELETE' });
      if (response.ok) { 
        window.alert(`${username} is Deleted`);
      } else {
        window.alert("Failed to delete the book");
      }
    } else {
      window.alert("Book is not deleted");
    }
  };

  let loc = useLocation()
  let bool = loc.pathname.startsWith('/adminportal')


  return (
    <>
      <div className="users">
        <h1>Users</h1>
        <div className="container">
          <table border={1}>
            <thead>
              <tr>
                <th>Slno</th>
                <th>User Name</th>
                <th>Contact</th>
                {bool && <th>Email</th>}
                {bool && <th>Password</th>}
                <th>Date of Birth</th>
                <th>Age</th>
                <th>Place</th>
                {bool && <th>Delete</th>}
                {bool && <th>Edit</th>}
              </tr>
            </thead>
            <tbody>
              {
                users.map((elem , index) => {
                  let { id,username, contact, email, password, dob, place } = elem
                  let dateObj = new Date()
                  let age = dateObj.getFullYear() - dob.slice(0,4)
                  return (
                    <>
                      <tr>
                        <td>{ index+1}</td>
                        <td>{ username}</td>
                        <td>{contact }</td>
                        {bool && <td>{ email}</td>}
                        {bool && <td>{ password}</td>}
                        <td>{ dob}</td>
                        <td>{age}</td>
                        <td>{place}</td>
                        {bool && <td><button className='deleteuser' onClick={() => { deleteUserData(id, username) }}>Delete</button></td>}
                        {bool && <td><button className='edituser'>Edit</button></td>}
                      </tr>
                    </>
                  )
                })
              }
           </tbody>
          </table>
        </div>
      </div>
    </>

  )
}

export default Users
