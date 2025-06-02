import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

const SignUpForm = ({ email }) => {
    const navigate = useNavigate();
      const [error, setError] = useState('')
      const [success, setSuccess] = useState('')
      const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: email, password: '', confirmPassword:''
      });

      const { signin } = useAuth()

      const postSignUp = async () => {
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const res = await fetch(`https://authservice-mvp-h0f7csgxhdbqh4ec.swedencentral-01.azurewebsites.net/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    ...formData,
                    email: email
                  })
                });

                const data = await res.json();
    
                if (!res.ok) {
                    setError(data.error || "Failed to sign up")
                  } else {
                   signin(data.token)
                  }
                } catch (err) {
                  setError("Error signing up", err.message)
                }
          }
    
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        await postSignUp();
    
      }

    

  return (
    <form id="signup-form" className="auth-form" onSubmit={handleSubmit}>
    <h1>Sign Up</h1>
    <label htmlFor="first-name">First Name</label>
    <input type="text" id="first-name" placeholder='First Name' name='firstName' value={formData.firstName} onChange={handleChange} required/>
    
    <label htmlFor="last-name">Last Name</label>
    <input type="text" id="last-name" placeholder='Last Name' name='lastName' value={formData.lastName} onChange={handleChange} required />

    <label htmlFor="signup-email">Email</label>
    <input type="email" id="signup-email" name='email' value={formData.email} readOnly />

    <label htmlFor="Password">Password</label>
    <input type="password" id="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} required/>

    <label htmlFor="Confirm Password">Confirm Password</label>
    <input type="password" id="confirm-password" placeholder='Confirm Password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} required />

    <div className='checkbox-info'>
      <span>I have read <Link to="/terms">terms and conditions</Link></span>
      <input type="checkbox" id="terms-checkbox" name="remember" />
    </div>

    <button type='submit' className='auth-button'>Sign Up</button>

    <div className='auth-text'>
      <span>Already have an account? <Link to="/login">Login</Link></span>
    </div>

  </form>
  );
};

export default SignUpForm
