import React, { useState } from 'react'
import './../assets/Styles/landingpage.css'
import AdminLogin from './Admin/AdminLogin'
import UserLogin from './Users/UserLogin'

const LandingPage = () => {
    let [bool, setBool] = useState(true)
    let handlebutton = () => {
        setBool(!bool)
    }
  return (
      <>
          <div className="landingpage">
              <div className="login-container">
                  <div className="header">Login Page</div>
                      <div className="btn-box">
                          <button onClick={handlebutton} className={bool ? 'ryt-btn' : 'lft-btn'}>{bool ? 'Admin' : 'User'}</button>        
                      
                  </div>
                  <div className="form-box">
                      {bool ?  <AdminLogin /> : <UserLogin/>}
                     
                      
                      </div>
              </div>
          </div>
      </>
  )
}

export default LandingPage
