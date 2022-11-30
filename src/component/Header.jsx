import React, {useState} from 'react'
import css from './Header.module.css'
import Logo from '../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'
import {Link} from "react-scroll";

const Header = () => {

  const [ShowMenu, setShowMenu] = useState(true)
  const toggleMenu =() =>{
    setShowMenu(( ShowMenu )=>!setShowMenu)
  }
  return (
    <div className={css.container} id="home">
        <div className={css.logo}>
            <img src={Logo} alt="" />
            <span>Amazon</span>
        </div>
        <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <GoThreeBars onClick={()=>setShowMenu(true)}/>
        </div>
            
            <ul className={css.menu} style={{display:ShowMenu ? 'inherit': 'none'}}>
                <li><Link to='home'>Home</Link></li>
                <li><Link to='Collection'>Collection</Link></li>
                <li><Link to='Brands'>Brands</Link></li>
                <li><Link to='Reviews'>Reviews</Link></li>
            </ul>
            

            <input type="text" className={css.search} placeholder="Enter text here"/>
            <CgShoppingBag className={css.cart}/>
            </div>
        </div>
  )
}

export default Header

