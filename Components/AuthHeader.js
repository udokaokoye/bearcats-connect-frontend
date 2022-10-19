import React from 'react'

const AuthHeader = ({setloginPassword, setloginEmailUsername, handelLogin}) => {
  return (
    <div className='authHeader'>
        <div className="logo">
            <div className="logoImg"></div>
            <div className="logoText">Bearcats Connect</div>
        </div>

        <div className="navLoginForm">
            <input onChange={(e) => setloginEmailUsername(e.target.value)} type="email" name="email" placeholder='username/email' />
            <input onChange={(e) => setloginPassword(e.target.value)} type="password" name="password" placeholder='Password' />
            <button onClick={() => handelLogin()}>Sign In</button>
        </div>
    </div>
  )
}

export default AuthHeader