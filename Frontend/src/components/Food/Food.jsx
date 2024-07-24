import React, { useContext } from 'react'
import './Food.css'
import { Store } from '../../context/Store'
import Fooditem from '../Fooditem/Fooditem'

const Food = ({catagory}) => {
  const { food_list } = useContext(Store)
  return (
    <div className='Food-list' id='food-list'>
      <h2>Top Dishes </h2>
      <div className="all-food-list">
        {food_list.map((item,index)=>{
          if(catagory==="All" || catagory===item.catagory){

            return  <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
        })}
      </div>
      
    </div>
  )
}

export default Food
