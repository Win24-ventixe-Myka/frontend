import React, { useState } from 'react'
import SignUpForm from '../components/SignUpForm';
import EmailVerificationForm from '../components/EmailVerificationForm';

const SignUpPage = () => {
  const [verifiedEmail, setVerifiedEmail] = useState(null)

  return (
    <div id="auth-signup" className="auth">
      {!verifiedEmail ? (
              <div id='email-verification-form' className='auth-form'>
                <EmailVerificationForm onVerified={setVerifiedEmail} />
              </div>
      ) : (
        
        <SignUpForm email={verifiedEmail} />
      )}
    </div>
  )
}

export default SignUpPage
