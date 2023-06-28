import React from 'react'
import '../components/Navbar.css'

export default function Navbar() {
  return (
    <div>
      <div className='header'>
        <div className='left'>
               <h1>Workout Api Testing</h1>
        </div>
        <div className='right'>
              <ul>
                <li>Home</li>
                <li>Contact us</li>
                <li>About Us</li>
                <li>Thank You</li>
              </ul>
        </div>
      </div>
    </div>
  )
}
