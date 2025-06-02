import React from 'react'
import formatDate from '../helpers/formatDate'

const DashboardEventCard = ({ category, title, location, date, price }) => {
  return (
    <div className='event-card'>
    <div className='image'>
        <div className='category'>{category}</div>
    </div>
<div className='card-information'>
    <p className='title'>{title}</p>
    <p className='location'>{location}</p>
</div>
<div className='card-footer'>
    <div className='event-details'>
        <div className='date-group'>
        <i className="fa-solid fa-calendar-days calendar-icon"></i>
        <p className='date'>{formatDate(date)}</p>
        </div>
    <p className='price'>${price}</p>
    </div>
</div>
</div>
  )
}

export default DashboardEventCard
