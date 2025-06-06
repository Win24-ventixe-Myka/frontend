import React, { useEffect, useState } from 'react'
import EventItem from './EventItem'
import { useAuth } from '../contexts/AuthContext'

const EventList = () => {
    const [events, setEvents] = useState([])
    const {token} = useAuth()

    const getEvents = async () => {
      if (!token) return

      const res = await fetch("https://eventservice-mvp-deawdpaqc7d8c9hq.swedencentral-01.azurewebsites.net/api/events", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
    
      if (res.ok) {
        const data = await res.json()
    
        if (Array.isArray(data)) {
          setEvents(data)
        } else if (Array.isArray(data.result)) {
          setEvents(data.result)
        } else {
          setEvents([])
        }
      }
    }

    useEffect(() => {
        getEvents()
    }, [token])

  return (
    <section id='events'>
      {events.map(event => (
      <EventItem key={event.id} item={event} />
))
      }
    </section>
  )
}

export default EventList
