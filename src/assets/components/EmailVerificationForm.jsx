import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EmailVerificationForm = ({ onVerified }) => {
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [sent, setSent] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const handleSend = async () => {
        try {
            const res = await fetch(`https://verificationservice-mvp-gddnhkcef9dffpgk.swedencentral-01.azurewebsites.net/api/verification/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({email})
                });
    
                if (!res.ok) {
                    setError("Failed to send verification code")
                  } else {
                    setSent(true);
                    setSuccess("Verification code sent to your email")
                  }
                } catch (err) {
                  setError("Could not send the code" + err.message)
                }
          }

          const handleVerify = async () => {
            try {
                const res = await fetch(`https://verificationservice-mvp-gddnhkcef9dffpgk.swedencentral-01.azurewebsites.net/api/verification/verify`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({ email, code })
                    });
        
                    if (!res.ok) {
                        setError("Invalid or expired code")

                      } else {
                        setSuccess("Email verified!")
                        onVerified(email)
                        navigate('/signin')

                      }
                    } catch (err) {
                      setError("Something went wrong")
                    }
          }

  return (
<div>
  {!sent ? (

    <div className="send">
        <h1>Enter your email to get a verification code</h1>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button type="button" className='auth-button' onClick={handleSend}>Send Code</button>
    </div>

  ) : (
    <div className="verify">
      <label>Verification Code</label>
      <input
        type="text"
        value={code}
        onChange={e => setCode(e.target.value)}
        placeholder="Enter the code you received"
      />
      <button type="button" className='auth-button' onClick={handleVerify}>Verify</button>
    </div>
  )}

{error && <p className="error-message">{error}</p>}
{success && <p className="success-message">{success}</p>}
</div>
  )
}

export default EmailVerificationForm
