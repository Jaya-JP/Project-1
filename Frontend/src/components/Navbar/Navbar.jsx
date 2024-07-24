import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets ,menu_list} from '../../assets/assets'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import { Store } from '../../context/Store'
const Navbar = ({setSLogin}) => {

      const [menu ,setMenu] = useState("home")
      const {getTotal,token,setToken} = useContext(Store)
      const navigate = useNavigate()
      const logout = () =>{
        localStorage.removeItem("token")
        setToken("");
        navigate("/")

      }

  return (
    <>
    <div className='Navbar' id='navbar'>
      <Link to='/'>
        <img src={assets.logo1} alt=""  className='logo'/>
        </Link>
      <ul className='nav-menu'>
        
        <a href='#' onClick={()=> setMenu("home")} className={menu==="home"?"active":""}>home</a>
        <a href='#menu' onClick={()=> setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#Mobile-app' onClick={()=> setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=> setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
        




      <div className="nav-right">
          <img src={assets.search_icon} alt="" />
          <div className="nav-search">
          <Link to="/cart">  
            <img src={assets.basket_icon} alt=""  />
            </Link>
            <div className={getTotal() ===0 ? "" : "dot" }></div>
          </div>
          {!token
          ?<button onClick={()=> setSLogin(true)}>Sign In</button>
          :<div className='nav-profile' >
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-drop">
              <li onClick={()=>navigate('/myorders')}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img  src={assets.basket_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
            </div>}
      </div>
    </div>
    </>
  )
}

export default Navbar;
