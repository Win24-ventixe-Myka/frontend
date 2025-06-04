import React, { useEffect, useState } from 'react'
import EventItem from './EventItem'

const EventList = () => {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
      const token = localStorage.getItem('token')
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
    }, [])

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
