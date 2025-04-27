import React, { useRef } from 'react'
import './../../assets/Styles/addusers.css'

const AddUsers = () => {
    let userFormData = useRef()
    let addUsers = (e) => {
        e.preventDefault()
        let newUser = {
            username: userFormData.current[0].value,
            contact: userFormData.current[1].value,
            email: userFormData.current[2].value,
            password: "user123",
            dob: userFormData.current[4].value,
            place: userFormData.current[5].value
        }
        try {
            let response=  fetch(`http://localhost:4000/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser),
              });
            if (response.ok) {
                userFormData.current.reset();
            } else {
                console.log("book has been added");
            
            }
                }catch (error) {
            console.error('Error:', error);
            setSuccessMessage('An error occurred. Please try again.');
        }


        
     
    }
  return (
      <>
      <div className="addusers">
              <h1>Add Users</h1>
              <div className="container">
                  <form action="" onSubmit={addUsers} ref={userFormData}>
                  <input type="text"  placeholder='Enter User Name'/>
                  <input type="number" name="" id=""  placeholder='Enter Contact Number'/>
                  <input type="email" name="" id=""  placeholder='Enter Email'/>
                  <input type="password" name="" id="" placeholder='Enter Password' />
                  <input type="date" name="" id="" />
                      <input type="text" name="" id="" placeholder='Enter Place' />
                      <button className='Addusers'>Add users</button>
                  </form>
              </div>
      </div>
      </>
  )
}

export default AddUsers
