import React from 'react'
import formatDate from '../helpers/formatDate'

const EventCard = ({ category, title, description, location, date, price, packages }) => {
  return (
    <div>
        <div className='card-header'>
            <div className='image'></div>
            <div className='card-information'>
            <div className='category'>{category}</div>
            <div className='info-group'>
                <p className='title'>{title}</p>
                <div className='location-date'>
                    <p className='location'>
                        <i className="fa-solid fa-location-dot"></i>
                    <span>{location}</span>
                    </p>
                    <p className='date'>
                        <i className="fa-solid fa-calendar-days calendar-icon"></i>
                    <span>{formatDate(date)}</span>
                    </p>
                </div>
            </div>
            <p className='description'>{description}</p>
            </div>
        </div>

        <div className='divider'></div>

        <div className='card-footer'>
    <p className='price'>{price}</p>
    </div>
    </div>
  )
}

export default EventCard
