import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  let navigate = useNavigate();
  const userForm = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState([]);
  
  const defaultEmail = "ravi123@gmail.com";
  const defaultPassword = "user123";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let userData = await axios.get(`http://localhost:4000/users`);
        setUsers(userData.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  let usersEmail = users.map(elem => elem.email);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  let handleUser = (e) => {
    e.preventDefault();
    const emailVal = userForm.current[0].value;
    const pswdVal = userForm.current[1].value;
    
    let emails = usersEmail.includes(emailVal);
    let pswd = (pswdVal === defaultPassword);
    
    if (emails && pswd) {
      navigate('/usersportal');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <>
      <div className='user-form'>
        <h2>User Login Page</h2>
        <form action="" ref={userForm} onSubmit={handleUser}>
          <input 
            type="email" 
            placeholder="Enter Email" 
            defaultValue={defaultEmail} 
          />
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              defaultValue={defaultPassword} 
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="toggle-password-btn"
              aria-label="Toggle Password Visibility"
            >
              <i className={showPassword ? 'bx bxs-show' : 'bx bxs-hide'}></i>
            </button>
          </div>
          <button className='admin-btn'>User Login</button>
        </form>
      </div>
    </>
  );
};

export default UserLogin;
