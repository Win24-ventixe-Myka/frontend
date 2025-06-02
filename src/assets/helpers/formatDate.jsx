import React from 'react'

const formatDate = (dateString) => {
    const date = new Date(dateString)
  
    const datePart = date.toLocaleDateString('en-CA') 
    const timePart = date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit'
    }) 
  
    return `${datePart} ${timePart}`
  }
  
  export default formatDate

  // Denna fil är genererad av Chat GPT 4.0 för att visa rätt format på datum och tider för alla events. 
