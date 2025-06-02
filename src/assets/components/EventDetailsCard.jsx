import React from 'react'
import { Link } from 'react-router-dom'

const EventDetailsCard = ({ event }) => {
  return (
    <section className='event-card event-info'>
    <div className='card-header'>
  <div className='image'>
    <p className='category'>{event.category}</p>
  </div>

  <div className='card-information'>
    <h1 className='title'>{event.title}</h1>
    <p className='date'>
    <i className="fa-solid fa-calendar-days calendar-icon"></i>
    <span>{event.eventDate}</span>
    </p>
    <div className='group'>
    <p className='location'>
      <i className="fa-solid fa-location-dot"></i>
        <span>{event.location}</span>
      </p>
      <Link to={`/events/booking/${event.id}`} className="book-button">
      <span>Book Event</span>
      </Link>
    </div>
      
      <div id="divider-top" className='divider'></div>

      <div className='price-wrapper'>
      <span>Starts from</span>
      <p className='price'>
        ${event.packages && event.packages.length > 0 ? event.packages[0].price : 'N/A'}
      </p>
      </div>

    <div id="divider-bottom" className='divider'></div>

    <div className='about'>
      <p className='header-title'>About Event</p>
      <p className='description'>
      The Echo Beats Festival brings together a stellar lineup of artists across EDM, pop, and hip-hop genres. 
      Prepare to experience a night of electrifying music, vibrant light shows, and unforgettable performances under the stars. 
      Explore food trucks, art installations, and VIP lounges for an elevated experience.
      </p>
    </div>
  </div>
</div>
    </section>
  )
}

export default EventDetailsCard
