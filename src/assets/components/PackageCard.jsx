import React from 'react'

const PackageCard = ({ title, seating, placement, price }) => {
  return (
    <div className='package-card'>
        <div className='package-header'>
            <h4 className='title'>{title}</h4>
            <p className='price'>${price}</p>
        </div>
    <div className='package-details'>
    <p className='seating'>
        <i className="fa-light fa-circle-check"></i>
        <span>{seating}</span>
    </p>
    <p className='placement'>
        <i className="fa-light fa-circle-check"></i>
        <span>{placement}</span></p>
    </div>
    </div>
  )
}

export default PackageCard
