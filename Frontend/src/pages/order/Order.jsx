import React, { useContext,useEffect,useState } from "react";
import "./Order.css";
import { Store } from "../../context/Store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Order = () => {

  const {getTotal,token,food_list,cartItems,url} = useContext(Store)

  const [data , setData] = useState({
   firstName : "",
   lastName : "",
   email : "",
   address : "",
   city : "",
   state : "",
   zipcode : "",
   country : "",
   phone : ""

  })

  const changeHandler = (event) => {
   const name = event.target.name;
   const value = event.target.value;
   setData(data => ({...data,[name]:value}))
  } 

  const placeorder = async (event) => {
      event.preventDefault();
      let orderItems = [];
      food_list.map((item)=>{
         if (cartItems[item._id]>0){
            let itemInfo = item;
            itemInfo["quantity"] = cartItems[item._id];
            orderItems.push(itemInfo)
         }

      })
      
      let orderData = {
         address : data,
         items : orderItems,
         amount :  getTotal() + 8,
      }
      let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
      if (response.data.success){
         const {session_url } = response.data;  
         window.location.replace(session_url);
      }
      else{
         console.log("error")
      }
  }

  const navigate= useNavigate();

  useEffect(() => {
   if(!token){
      navigate("/cart")
   }
   else if (getTotal()===0){
      navigate("/cart")
   }
  },[token])


   return (
      <form onSubmit={placeorder} className="order">
         <div className="order-left">
            <p className="title">Delivery Details</p>
            <div className="mul-fileds">
               <input required name="firstName" onChange={changeHandler} value={data.firstName} type="text" placeholder="First name" />
               <input required name="lastName" onChange={changeHandler} value={data.lastName} type="text" placeholder="Last Name" />
            </div>
            <input required name="email" onChange={changeHandler} value={data.email} type="text" placeholder="Email Address" />
            <input required name="address" onChange={changeHandler} value={data.address} type="text" placeholder="Address" />
            <div className="mul-fileds">
               <input required name="state" onChange={changeHandler} value={data.state} type="text" placeholder="State" />
               <input required name="city" onChange={changeHandler} value={data.city} type="text" placeholder="City" />
            </div>
            <div className="mul-fileds">
               <input required name="zipcode" onChange={changeHandler} value={data.zipcode} type="text" placeholder="Zip code" />
               <input required name="country" onChange={changeHandler} value={data.country} type="text" placeholder="Country" />
            </div>
            <input required name="phone" onChange={changeHandler} value={data.phone} type="text" placeholder="Phone" />
         </div>
         
         
         <div className="order-right">

         <div className="cart-total">
          <h1>Cart Totals</h1>
          <div>
            <hr />
            <div className="total-details">
              <p>Sub Total</p>
              <p>Rs: {getTotal()}</p>
            </div>
            <hr />
            <div className="total-details">
              <p>Delivery Fees</p>
              <p>Rs: {getTotal()===0?0:8}</p>
            </div>
            <hr />
            <div className="total-details">
              <b>Total</b>
              <b>Rs: {getTotal()===0?0:getTotal()+8}</b>
            </div>
          </div>
            <button type="submit" >Payment</button>
        </div>


         </div>
      </form>
   );
};

export default Order;
