import React from 'react'

const Statistics = () => {
  return (

    <div className='statistics'>

    <div id="upcoming" className='stat-card'>
    <i className="fa-regular fa-calendar stat-icon"></i>
    <div className='stat-text'>
    <p className='title'>Upcoming Events</p>
    <span className='value'>365</span>
    </div>
    </div>

    <div id="bookings" className='stat-card'>
    <i className="fa-regular fa-square-check stat-icon"></i>
    <div className='stat-text'>
        <p className='title'>Total Bookings</p>
        <span className='value'>1798</span>
    </div>
    </div>

    <div id="tickets" className='stat-card'>
    <i className="fa-solid fa-ticket stat-icon"></i>
    <div className='stat-text'>
    <p className='title'>Tickets Sold</p>
    <span className='value'>1250</span>
    </div>
    </div>

</div>
  )
}

export default Statistics
