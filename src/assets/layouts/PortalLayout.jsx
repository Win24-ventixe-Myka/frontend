import React from 'react'
import Nav from '../sections/Nav'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import { Outlet, useLocation } from 'react-router-dom'

const PortalLayout = () => {
  const {pathname} = useLocation()

  let title = ''

  switch (pathname) {
    case '/dashboard':
      title = "Dashboard"
      break
      case '/events':
        title = "Events"
        break
        case '/eventdetails':
          title = "EventDetails"
  }

  return (
    <div className='portal-wrapper'>
        <Nav title={title}/>
        <Header title={title}/>
      <main>
       <Outlet/>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default PortalLayout
