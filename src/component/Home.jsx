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
          <Cards id1={true} heading="Free Access" description="Access the entire feature including problems, solutions, and resources completely free."/>
          <Cards id2={true} heading="Structure Learning" description="Follow curated problem sets tailored to your preparation time, whether you have over three months or less than a month."/>
          <Cards  heading="Pattern  Recognition" description="Develop your problem-solving intuition by learning to recognize common patterns across different coding problems."/>
          </div>
          
        </div>
    </div>
  )
}

export default Home