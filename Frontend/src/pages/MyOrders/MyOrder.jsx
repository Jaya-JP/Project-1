import React, { useContext, useEffect, useState } from 'react'
import './MyOrder.css'
import { Store } from '../../context/Store'
import axios from 'axios'
import {assets } from '../../assets/assets'

const MyOrder = () => {

    const {url,token} = useContext(Store)
    const [data , setData] = useState([ ])

    const fetchOrder = async () =>{
        const response = await axios.post(url+"/api/order/userorders",{ }, {headers : {token}});
        setData(response.data.data)
        console.log(response.data.data)
    }

    useEffect (()=>{
        if (token) {
            fetchOrder();
        }
    } , [token])
  return (
    <div className='myOrder'>
        <h2>My Orders</h2>
        <div className="contain">
            {data.map(( order , index )=> {
                return(
                    <div key={index} className="myOrder-order">
                        <img src={assets.parcel_icon} alt="" />
                        <p> {order.items.map((item , index)=>{
                            if (index === order.items.length-1){
                                return item.name+ " X "+item.quantity
                            }
                            else{
                                return item.name+ " X "+item.quantity+", "

                            }
                        })} </p>

                        <p> Rs: {order.amount}.00 </p>
                        <p> Items :  {order.items.length} </p>
                        <p> <span>&#x25cf; </span> <b>{order.status }</b> </p>
                        <button onClick={fetchOrder}>Track Order</button>

                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyOrder