import React from 'react'
import '../styles/Menubar.css'
function Menubar() {
  return (
    <>
    <div className="menu_container">
        <h1>Grind<span>75</span></h1>
        <ul>
            <li><a href="#">Problems</a></li>
            <li><a href="#">System design</a></li>
            <li><a href="#">Discuss</a></li>
        </ul>
    </div>
    </>
  )
}

export default Menubar