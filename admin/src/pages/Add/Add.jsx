import React, {  useState } from 'react'
import './Add.css'
import {assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {


    const [image , setImage] = useState(false);
    const [data, setData] = useState({
        name:"",
        description:"",
        price:"",
        catagory:"Salad"
    })


    const onChangeHandler=(event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    
    const onSubmithandler = async (event) => {
        event.preventDefault();
        const formData= new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("catagory",data.catagory)
        formData.append("image",image)

        // API call
        const response = await axios.post( `${url}/api/food/add`,formData);
        if (response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                catagory:"Salad"
            })
            setImage(false)
            toast.success(response.data.message)

        }
        else{
            toast.error(response.data.message)
        }
        
    }

  return (
    <div className='add'>
        <form className='form-add' onSubmit={onSubmithandler}> 
            <div className="add-img form-add" >

                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image) :  assets.upload_img } alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
            </div>

            <div className="add-product-name formadd" > 
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name'  placeholder=' Type Here' required/>
            </div>
            <div className="product-description form-add">
                <p>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description} name="description" rows='6' placeholder='Write Content Here' id="" required></textarea>
            </div>
            <div className="add-catagory-price">
                <div className="add-catagory form-add">
                    <p>Product Category</p>
                    <select onChange={onChangeHandler}   name="catagory"   >
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Desert">Desert</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="add-price form-add">
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='Rs: 30' required />
                </div>
            </div>
            <button  type='submit' className='add-btn' >ADD</button>


        </form>


    </div>
  )
}
export default Add