import React from 'react'
import '../styles/Menubar.css'
import { Link, Outlet } from 'react-router-dom'
function Menubar() {
  return (
    <>
    <div className="menu_container">
        <h1>Grind<span>Algo</span></h1>
        <ul>
            <Link className='Link' to='/'>Home</Link>
            <Link  className='Link' to='/problems'>Problems</Link>
            <Link className='Link' to='/systemdesign'>System Design</Link>
            <Link className='Link' to='discuss'>Discuss</Link>
        </ul>
    </div>
    <Outlet/>
    </>
  )
}

export default Menubar