import React,{useState} from 'react'
import './Header1.css'
import Logo from '../assets/logo.png'
import {Link} from "react-scroll";
import {GoThreeBars} from 'react-icons/go'

const Header = () => { 
  const mobile = window.innerWidth<=768?true : false;
  const [menuOpened,setMenuOpened] = useState(false)
 
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo'/>
        {(menuOpened ===false && mobile===true)?(
          
          <div
          style={{backgroundColor:'var(--appColor)',padding:'0.5rem', borderRadius:"5px"}}
          
          onClick = {()=>setMenuOpened(true)}
          >
      
          <GoThreeBars style={{width:'1.8rem', height:'1.5rem', cursor:"pointer" }}/>
          </div>
          
        ):
        (
          <ul className='header-menu'>
            <li><Link
            onClick={()=>setMenuOpened(false)}
            to='home' 
            span={true}
            smooth={true}
            >Home</Link></li>
            <li><Link
            onClick={()=>setMenuOpened(false)}
            to='Collection' 
            span={true}
            smooth={true}>Collection</Link></li>
            <li><Link
            onClick={()=>setMenuOpened(false)}
            to='Brands' 
            span={true}
            smooth={true}
            >Brands</Link></li>
            <li><Link
            onClick={()=>setMenuOpened(false)}
            to='Reviews' 
            span={true}
            smooth={true}
            >Reviews</Link></li>
        </ul>
        )}
    </div>
  )
}
export default Header;