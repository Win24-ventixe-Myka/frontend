import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Denna klass är genererad av Chat GPT 4.0 för att authentisera sidan 

const AuthContext = createContext() // Lagrar all auth data

export const AuthProvider = ({ children }) => { // Fungerar som en wrapper så att hela sidan får tillgång till all auth info
    const [token, setToken] = useState (localStorage.getItem('token'))
    const navigate = useNavigate()

    // Kollar om användaren är inloggad
    const isAuthenticated = !!token

    // Tar emot en ny token och sparar den efter inloggning. Skickar vidare användaren till dashboard
    const signin = (newToken) => {
        localStorage.setItem('token', newToken)
        setToken(newToken)
        navigate('/dashboard')
    }

    // Tar bort token efter utloggning och nollställer. Skickar användaren till signin sidan

    const signout = () => {
        localStorage.removeItem('token')
        setToken(null)
        navigate('/signin')
}

return (
    <AuthContext.Provider value={{ token, isAuthenticated, signin, signout }}>
    {children}
  </AuthContext.Provider>
)
}

export const useAuth = () => useContext(AuthContext)
