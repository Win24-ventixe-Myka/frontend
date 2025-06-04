import React, { useEffect } from 'react'
import Statistics from '../components/Statistics'
import UpcomingEvent from '../components/UpcomingEvent'
import AllEvents from '../components/AllEvents'

const Dashboard = () => {

  return (

<div id="dashboard">
    <Statistics />
    <UpcomingEvent />
    <AllEvents />
</div>

  )
}

export default Dashboard
