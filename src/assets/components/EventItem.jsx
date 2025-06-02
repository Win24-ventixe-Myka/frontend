import React from 'react'
import { Link } from 'react-router-dom'
import EventCard from './EventCard'

const EventItem = ({item}) => {
  

  const price = item.price;

  return (
    <div className='event-card'>
      <Link to={`/events/${item.id}`}>
      <EventCard
      category={item.category}
      title={item.title}
      description={item.description}
      location={item.location}
      date={item.eventDate}
      price={`$${price}`}
       />
      </Link>
    </div>
  )
}

export default EventItem
