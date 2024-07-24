import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} className='logo' alt="" />
        <img src={assets.profile} className='profile' alt="" />
     
    </div>
  )
}

export default Navbar
