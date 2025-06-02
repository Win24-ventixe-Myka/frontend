import React, { useEffect } from 'react'
import SignInForm from '../components/SignInForm'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignInPage = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated])


  return (
    <div id='auth-login' className='auth'>
      <SignInForm />
    </div>
  )
}

export default SignInPage
