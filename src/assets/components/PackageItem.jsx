import React from 'react'
import PackageCard from './PackageCard'

const PackageItem = ({ pack }) => {

  return (
      <PackageCard
      title={pack.title}
      seating={pack.seatingArrangement}
      placement={pack.placement}
      price={pack.price}
      currency={pack.currency}/>
  )
}

export default PackageItem
