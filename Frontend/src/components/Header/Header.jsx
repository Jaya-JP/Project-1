import React from 'react'
import './Header.css'
import { bann } from '../../assets/assets'
import '../../App.css'


const Header = () => {
  return (
    <div className="header ">
      
        <div className="head-con">
            <h2>Order Your Fav Food</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satishfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <button>View Menu</button>
        </div>
      
      <img src={bann.bann_1} alt=""  className='banimg'/>
     
    </div>
  )
}

export default Header
