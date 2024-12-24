import React from 'react'
import '../styles/Menubar.css'
import { Link, Outlet } from 'react-router'
function Menubar() {
  return (
    <>
    <div className="menu_container">
        <h1>Grind<span>Algo</span></h1>
        <ul>
            <Link to='/'></Link>
            <Link  className='Link' to='/problems'>Problems</Link>
            <Link className='Link' to='/systemdesign'>System design</Link>
            <Link className='Link' to='discuss'>Discuss</Link>
        </ul>
    </div>
    <Outlet/>
    </>
  )
}

export default Menubar