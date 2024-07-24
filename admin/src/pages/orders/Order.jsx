import React, { useEffect, useState } from 'react';
import './order.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + '/api/order/list');
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error('Error fetching orders');
      }
    } catch (error) {
      toast.error('An error occurred');
      console.error('There was an error fetching the orders!', error);
    }
  };

  const statusHandle  = async (event,orderId) =>{
    // console.log(event,orderId)
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status: event.target.value
    })
    if (response.data.success){
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []); // Add `url` as a dependency if it might change

  return (
    <div className='order add form-add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " X " + item.quantity;
                  } else {
                    return item.name + " X " + item.quantity + " , ";
                  }
                })}
              </p>
              <p className='order-item-name'>{order.address.firstName+" "+order.address.lastName}</p>
              <div className='order-item-address'>
                <p>{order.address.address+", "}</p>
                <p>{order.address.city+", " +order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items : { order.items.length } </p>
            <p>Rs : { order.amount } </p>
            <select onChange={(event)=>statusHandle(event,order._id) } value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
