import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

const BookEventForm = ({ eventId }) => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const { token } = useAuth()
  const [formData, setFormData] = useState({ eventId: eventId, 
    firstName: '', lastName: '', email: '', streetName: '', postalCode: '', city: '', ticketQuantity: 1 })
  

  const postBooking = async () => {
    try {
      const res = await fetch(`https://bookingservice-mvp-d6cpa4ghhuabbvdy.swedencentral-01.azurewebsites.net/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Autentisering med token från backend
        },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        setError("Booking failed")
      } else {
        setSuccess("Booking successful!")
      }
    } catch (err) {
      setError("Error submitting booking: " + err.message)
    }
  

  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postBooking()

  }

  return (
    <div className='event-card'>
    <div className='booking-form'>
      <form onSubmit={handleSubmit} noValidate>
        <div className='form-group'>
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required/>
        </div>
        <div className='form-group'>
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required/>
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
        </div>
        <div className='form-group'>
          <label>Street Name</label>
          <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} required/>
        </div>

        <div className='form-group'>
          <label>Postal Code</label>
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required/>
        </div>

        <div className='form-group'>
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required/>
        </div>

        <button type='submit' className='book-button'>Book Event</button>
      </form>

      {success && (
          <p className='success-message'>{success}</p>
        )}

      {error && (
          <p className='error-message'>{error}</p>
        )}

    </div>
    </div>
  )
}

export default BookEventForm
