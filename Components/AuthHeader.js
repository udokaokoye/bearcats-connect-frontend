import React from 'react'

const AuthHeader = () => {
  return (
    <div className='authHeader'>
        <div className="logo">
            <div className="logoImg"></div>
            <div className="logoText">Bearcats Connect</div>
        </div>

        <div className="navLoginForm">
            <input type="email" name="email" placeholder='username/email' />
            <input type="password" name="password" placeholder='Password' />
            <button>Sign In</button>
        </div>
    </div>
  )
}

export default AuthHeader