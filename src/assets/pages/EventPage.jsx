import React from 'react'
import EventList from '../components/EventList'

const EventPage = () => {
  return (
    <div id='events'>
      <div className='event-card-collection'>
      <EventList/>
      </div>
    </div>
  )
}

export default EventPage
