import React from 'react'
import '../styles/Home.css'
import Cards from './Cards'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='home'>
        <div className="home_description">
          <h1>DSA and System Design Practice Arena!</h1>
          <p>Learn Data Structures and Algorithms systematically. Practice LeetCode problems grouped by patterns. Ace your coding interviews.</p>
          <Link to='/Problems'><button>solve problems!</button></Link>
        </div>
        <div className='features'>
          <h1>Key Features</h1>
          <div className="cards">
          <Cards />
          <Cards/>
          <Cards/>
          </div>
          
        </div>
    </div>
  )
}

export default Home