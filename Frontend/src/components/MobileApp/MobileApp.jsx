import React from 'react'
import './MobileApp.css'
import { assets } from '../../assets/assets'

const MobileApp = () => {
  return (
    <div className='mobileApp' id='Mobile-app'>
        <p>For Better Experience Download <br />Tasty Fast Food  </p>
        <div className="app-image">
        <img src={ assets.play_store} alt="" />
        <img src={ assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default MobileApp

