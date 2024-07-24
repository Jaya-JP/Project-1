import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import {toast} from 'react-toastify'

const List = ({url}) => {
  const [list,setList] = useState([]);
  const fetchList=async () =>{
    const response = await axios.get(`${url}/api/food/list`);
    // console.log(response.data);
    if (response.data.success){
      setList(response.data.data)
    }
    else{
      toast.error("error")
    }
  }

  const removeFood= async (foodId) =>{
    // console.log(foodId);
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if (response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("error");
    }

  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add form-add'>
      <p>All Foods</p>
      <div className="list-table">
        <div className="table-formate title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=> {
          return(
            <div key={index} className="table-formate ">
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.catagory} </p>
              <p>Rs: {item.price} </p>
              <p onClick={()=>removeFood(item._id)} className='x'> x </p>

            </div>
          )
        })}
      </div>


    </div>
  )
}

export default List