import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'

const Menu = ({catagory,setCategory}) => {
  return (
    <div className='menu-items' id='menu'>
        <h1>Menu Lists</h1>
        <p className="menu-text">Choose from a diverse menu featuring dishes.Our mission is to satisfy your craving and elevate your clining experience, one delicious meal at a time</p>
       
        <div className="menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}  key={index}>
                                <img className={catagory===item.menu_name?"active":""} src={item.menu_image} alt="" />
                                <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>

        <hr />
      
    </div>
  )
}

export default Menu
