import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-opt">
            <NavLink to='/add' className="options">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="options">
                <img src={assets.order} alt="" />
                <p>List Items</p>
            </NavLink>
            <NavLink to='/orders' className="options">
                <img src={assets.order} alt="" />
                <p>Order</p>
            </NavLink>
        </div>


  
    </div>
  )
}

export default Sidebar
