import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Fooder' id='footer'>
        <div className="foo-con"> 
            <div className="foo-con-l">
                <img src={assets.logo1} className='logo' alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit eveniet in accusamus aperiam nesciunt illum quis, voluptatibus saepe nisi ab aliquam repudiandae excepturi! Consectetur doloribus molestiae a quo totam aspernatur!</p>
                <div className="foo-social-icon">
                    <img src={ assets.facebook_icon} alt="" />
                    <img src={ assets.twitter_icon} alt="" />
                    <img src={ assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="foo-con-c">
                <h2> Tassty Fast Food</h2>
                <ul>
                    <li>Home</li>
                    <li>About-us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="foo-con-r">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-987-612-3456</li>
                    <li>contacttastyfastfood.com</li>
                </ul>
            </div>
        </div>
      
      <hr />
      <p className="foo-copy-right">Copy right &copy; Fastfood.com -All Rights Reserved. </p>
    </div>
  )
}

export default Footer
