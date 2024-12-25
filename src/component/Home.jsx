import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='home'>
        <div className="home_description">
          <h1>DSA and System Design Practice Arena!</h1>
          <p>Learn DSA and System design systematically. Practice LeetCode problems grouped by patterns. Ace your coding interviews.</p>
          <button><Link to='/Problems'>Start Practising</Link></button>
        </div>
    </div>
  )
}

export default Home