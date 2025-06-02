import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const SignInForm = () => {
  const { signin } = useAuth()
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('https://authservice-mvp-h0f7csgxhdbqh4ec.swedencentral-01.azurewebsites.net/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)  
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Failed to sign in')
        return
      }

      signin(data.token)

    } catch (err) {
      setError('Error signing in')
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>Sign In</h1>

      {error && <p className="auth-error">{error}</p>}

      <label htmlFor="signin-email">Email</label>
      <input type="email" id="signin-email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required
      />

      <div className='checkbox-info'>
        <span>Remember Me</span>
        <input type="checkbox" id="remember-checkbox" name="remember" />
      </div>

      <button type='submit' className='auth-button'>Sign In</button>

      <div className='auth-text'>
        <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>
      </div>
    </form>
  )
}

export default SignInForm