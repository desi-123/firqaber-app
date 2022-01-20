import React, { useState } from 'react'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    alert('Login submitted')
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="username">
          <div className="name">
            <label htmlFor="email"></label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email or phone number"
            />
          </div>
          <div className="password">
            <label htmlFor="password"></label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <button className='btn btn--login'>Log in</button>
        </div>
      </form>
    </div>
  )
}

export default Login
