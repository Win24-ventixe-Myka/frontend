import React, { useEffect, useState } from 'react'
import DashboardEventCard from './DashboardEventCard'
import { Link, useNavigate } from 'react-router-dom'

const AllEvents = () => {
  const [events, setEvents] = useState([])
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/events')
  }

  // Denna funktion är genererad av Chat GPT 4.0 för att visa specifika events på Dashboard sidan via Id från API
  const eventIds = [
    '9c3abb3f-4314-46bd-ad0a-e136c7c65880',
    '9ce4b16a-d34b-4b04-bfa6-49a23729b569',
    '92b5a7e4-ddf0-4eb5-a9b3-d25d6e2d0b4a'
  ]

  const getEvents = async () => {
    const token = localStorage.getItem('token') // Hämtar inloggningstoken
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

      // Hämtar alla events från apiet
      const allEvents = Array.isArray(data) ? data : data.result
      // Hämtar eventet som matchar idn
      const filtered = allEvents.filter(event => eventIds.includes(event.id))
      setEvents(filtered)
    }
  }

      useEffect(() => {
          getEvents()
      }, [])

  return (
    <div id='all-events' className='dashboard-events'>

      <div className='events-header'>
        <h3 className='title'>All events</h3>
        <button id="view-all-button" className='event-button' onClick={handleClick}>
            <span>View All Event</span>
        </button>
      </div>

      <section className='event-card-collection'>
        {events.map(event => (
          <Link to={`/events/${event.id}`} key={event.id} className='card-link'>
          <DashboardEventCard 
          key={event.id}
          category={event.category}
          title={event.title}
          location={event.location}
          date={event.eventDate}
          price={event.price}
          />
          </Link>
        ))}

      </section>
    </div>
  )
}

export default AllEvents
