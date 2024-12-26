import React from 'react'
import '../styles/Cards.css'
import { FcInspection } from "react-icons/fc";
function Cards(props) {
  return (
    <>
    <div className="card_container">
    <FcInspection size={40}/>
    <h2>heading</h2>
    <h2>description</h2>
    </div>
    </>
  )
}

export default Cards