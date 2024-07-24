import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { Store } from '../../context/Store'

const Fooditem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart,url} = useContext(Store)

  return (
    <div className='fooditem'>
      <div className="item-img-con">
        <div className="img-con">
        <img className='food-item-img' src={url+"/images/"+image} alt="" />
        </div>
        {
          !cartItems[id]
          ? <img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt="" />
          : <div className="food-item-counter">
             <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" /> 
             <p>{cartItems[id]}</p>
             <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="" />

          </div>
        }
      </div>
      <div className="foo-item-info">
        <div className="food-item-name-rating">
          <p> {name} </p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-description"> {description} </p>
        <div className="food-price">Rs: {price} </div>
      </div>
      
    </div>
  )
}

export default Fooditem
