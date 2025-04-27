import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const adminForm = useRef();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleAdmin = (e) => {
    e.preventDefault();
    const adminVal = adminForm.current[0].value;
    const passVal = adminForm.current[1].value;

    const adminCredential = {
      admin: 'qwerty@gmail.com',
      password: 'qwerty123',
    };

    const { admin, password } = adminCredential;
    if (adminVal === admin && passVal === password) {
      navigate('/adminportal');
    } else {
      alert('Invalid Credential');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="admin-form">
        <h2>Admin Login Page</h2>
        <form action="" ref={adminForm} onSubmit={handleAdmin}>
          <input type="email" placeholder="Enter Email" />
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'} 
              placeholder="Enter Password"
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
          <button className='admin-btn'>Admin Login</button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
