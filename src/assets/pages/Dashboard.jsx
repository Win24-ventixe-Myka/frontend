import React, { useEffect } from 'react'
import Statistics from '../components/Statistics'
import UpcomingEvent from '../components/UpcomingEvent'
import AllEvents from '../components/AllEvents'

const Dashboard = () => {

  const fetchEventsWithToken = async () => {
    const token = localStorage.getItem('token'); // hämta token
    if (!token) {
      console.error("No token found, can't fetch events");
      return;
    }

    try {
      const res = await fetch("https://eventservice-mvp-deawdpaqc7d8c9hq.swedencentral-01.azurewebsites.net/api/events", {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      if (res.ok) {
        const data = await res.json();
        console.log("Events response:", data);
      } else {
        console.error("Failed to fetch events, status:", res.status);
      }
    } catch (error) {
      console.error("Fetch events error:", error);
    }
  };

  useEffect(() => {
    fetchEventsWithToken();
  }, []);

  return (

<div id="dashboard">
    <Statistics />
    <UpcomingEvent />
    <AllEvents />
</div>

  )
}

export default Dashboard
