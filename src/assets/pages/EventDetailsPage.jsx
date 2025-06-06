import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EventDetailsCard from '../components/EventDetailsCard'
import TermsAndConditions from '../components/TermsAndConditions'
import PackageList from '../components/PackageList'
import { useAuth } from '../contexts/AuthContext'

const EventDetailsPage = () => {
  const { id } = useParams()
  const [event, setEvent] = useState(null)
  const {token} = useAuth()

  const getEvents = async () => {
    const res = await fetch(`https://eventservice-mvp-deawdpaqc7d8c9hq.swedencentral-01.azurewebsites.net/api/events/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      if (res.ok) {
        const response = await res.json()
        setEvent(response.result || response)
      }
  }

  useEffect(() => {
    getEvents()
  }, [id, token])

  if (!event?.packages) return null

  return (
    <div id="event-details">
      <EventDetailsCard event={event} />
      <PackageList packages={event.packages || []} />
      <TermsAndConditions />
    </div>
  )
}

export default EventDetailsPage