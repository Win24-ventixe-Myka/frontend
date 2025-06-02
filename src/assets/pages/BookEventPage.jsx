import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookEventForm from '../components/BookEventForm'

const BookingEventPage = () => {
    const {id} = useParams()
      const [event, setEvent] = useState({})
    
      const getEvents = async () => {
          const res = await fetch(`https://eventservice-mvp-deawdpaqc7d8c9hq.swedencentral-01.azurewebsites.net/api/events/${id}`)

          if (res.ok) {
            const response = await res.json()
            setEvent(response)
          }
      }
    
      useEffect(() => {
        getEvents()
      }, [id])

      if (!event) return null

  return (
    <div id='booking-event'>
      <h1>Book Event - {event.title}</h1>
      <BookEventForm eventId={id}/>
    </div>
  )
}

export default BookingEventPage
