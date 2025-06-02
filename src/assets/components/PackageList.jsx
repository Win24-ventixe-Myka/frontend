import React from 'react'
import PackageItem from './PackageItem'

const PackageList = ({ packages }) => {

  if (!Array.isArray(packages) || packages.length === 0) {
    return <p>No packages available.</p>
  }

  return (
    <section id='packages'>
        <div className='event-card'>
        <div className='packages-header'>
            <h3 className='title'>Packages</h3>
            <i className="fa-solid fa-ellipsis"></i>
        </div>
        <div className='package-list'>
        {packages.map((pack, index) => (
        <PackageItem key={index} pack={pack} />
      ))}
        </div>
        </div>
    </section>
  )
}

export default PackageList
