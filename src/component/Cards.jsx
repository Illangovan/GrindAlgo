import React from 'react'
import '../styles/Cards.css'
import { FcDataEncryption } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcCircuit } from "react-icons/fc";
function Cards(props) {
  
  return (
    <>
    <div className="card_container">
    { props.id1 ?  <FcDataEncryption size={40}/> : props.id2 ? <FcBullish size={40}/> : <FcCircuit size={40}/>}

    <h2>{props.heading}</h2>
    <p>{props.description}</p>
    </div>
    </>
  )
}

export default Cards