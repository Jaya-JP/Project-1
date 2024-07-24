import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import Food from '../../components/Food/Food'
import MobileApp from '../../components/MobileApp/MobileApp'

const Home = () => {

    const [catagory, setCategory] = useState("All")

  return (
    <div>
     <Header/>
     <Menu catagory={catagory} setCategory={setCategory} />
     <Food catagory={ catagory}/>
     <MobileApp />
     
    </div>
  )
}


export default Home
