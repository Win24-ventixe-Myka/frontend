import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? children : <Navigate to="/signin"/>
    
}

export default ProtectedRoute

// Denna komponent är genererad av Chat GPT 4.0 för att kunna authentisera sidor som Events, Dashboard, Booking etc.
