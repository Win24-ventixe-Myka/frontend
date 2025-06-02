import React from 'react'

const Header = ({ title }) => {
  return (
   <header>
    <div className='header-headline'>
      <h1>{title}</h1>
    </div>
    <div className='header-search'>
      <div className='search-bar'>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input className='search-input' placeholder='Search anything'></input>
      </div>
    </div>
   </header>
  )
}

export default Header
