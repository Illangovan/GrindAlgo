import React, { useState } from 'react'
import '../styles/Menubar.css'
import { Link, Outlet } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md";
function Menubar() {
  const [val,setValue]=useState(false);
  const hid={
    visibility:"hidden"
  }
  const vis={
    visibility:"visible"
  }
  return (
    <>
    <div className="menu_container">
        <h1>Grind<span>Algo</span></h1>
        <ul style={val ? vis : hid} >
            <Link onClick={()=>{setValue(!val)}} className='Link' to='/'>Home</Link>
            <Link onClick={()=>{setValue(!val)}} className='Link' to='/problems'>Problems</Link>
            <Link onClick={()=>{setValue(!val)}} className='Link' to='/systemdesign'>System Design</Link>
            <Link onClick={()=>{setValue(!val)}} className='Link' to='discuss'>Discuss</Link>
        </ul>
    <button className='menu_icon' onClick={()=>{setValue(!val)}}>{val ? <MdCancel size={40}/> :<IoMdMenu size={40}/>}</button>
    </div>
    <Outlet/>
    </>
  )
}

export default Menubar