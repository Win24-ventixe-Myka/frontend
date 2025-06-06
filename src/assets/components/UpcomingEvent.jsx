import React, { useEffect, useState } from 'react'
import formatDate from '../helpers/formatDate'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const UpcomingEvent = () => {
    const [event, setEvents] = useState([])
    const {token} = useAuth()
  
    const eventId = [
      'fb38fa10-9257-49a8-8c1b-f732ded15d5e'
    ]
  
    const getEvents = async () => {
      
      if (!token) { // Kontroll om användaren inte är inloggad
        return
      }

      const res = await fetch("https://eventservice-mvp-deawdpaqc7d8c9hq.swedencentral-01.azurewebsites.net/api/events", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (res.ok) {
        const data = await res.json()

        const allEvents = Array.isArray(data) ? data : data.result
  
        const found = allEvents.find(event => eventId.includes(event.id))
        setEvents(found)
      }
    }
  
        useEffect(() => {
            getEvents()
        }, [])
  return (

<div id="upcoming-event" className='dashboard-events'>
  <div className="events-header">
    <h3 className="title">Upcoming Event</h3>
    <i className="fa-solid fa-ellipsis"></i>
  </div>

  <div className="upcoming-event-card">
    <div className="image">
      <div className='category'>{event.category}</div>
    </div>

    <div className="information">
      <section className="card-header">
        <h3 className="title">{event.title}</h3>
        <p className="location">{event.location}</p>
        <p className="description">{event.description}</p>
      </section>

      <section className="card-footer">
        <div className="event-date">
          <i className="fa-solid fa-calendar-days event-icon"></i>
          <div className="date-group">
            <p className="date">{formatDate(event.eventDate)}</p>
          </div>
        </div>
        <Link to={`/events/${event.id}`}>
        <button className='event-button'>View Details</button>
        </Link>
      </section>
    </div>
  </div>
</div>
  )
}

export default UpcomingEvent
