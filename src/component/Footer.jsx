import React from 'react';
import css from './footer.module.css';
// import {
//     InboxIcon,
//     PhoneIcon,
//     LocationMarkerIcon,
//     LoginIcon,
//     UsersIcon,
//     LinkIcon,
// } from "@heroicons/react/outline";

import Logo from '../assets/logo.png';
const footer = () => {
return (
<div className={css.cFooterWrapper}>
    <hr/>
    
    <div className={css.logo}>
            <img src={Logo} alt="" />
            <span>amazon</span>
        </div>
            
            <div className={css.copyRight} style={{fontweight:600}}>
            <span>CopyRight @2022 by amazon</span>
            <span>All rights reserved.</span>
            </div>
            
    </div>
  );
};

export default footer;

// <div className={css.cFooter}>
// <div className={css.block}>
//     <div className={css.detail}>
//         <span>Contact Us</span>
//         <span className={css.pngLine}>
//         <LocationMarkerIcon className={css.icon} />
//         <span>111 north avenue Orlando, FL 32801</span>
//         </span>
//         <span className={css.pngLine}>
//         {" "}
//         <PhoneIcon className={css.icon} />
//         <a href='tel:352-306-4415'>tel:352-306-4415</a>
//         </span>
//             <span className={css.pngLine}>
//             <InboxIcon className={css.icon} />
//         <a href="mailto:support@amazon.com ">support@amazon.com</a>
//             </span>
//         </div>
//     </div>


//     <div className={css.block}>
//         <div className={css.detail}>
//             <span>Account</span>
//             <span className={css.pngLine}>
//                 <LoginIcon className={css.icon} />
//                 Sign In
//             </span>
//         </div>
//     </div>


    
//     <div className={css.block}>
//         <div className={css.detail}>
//             <span>Company</span>
//             <span className={css.pngLine}>
//                 <UsersIcon className={css.icon} />
//                 About US
//             </span>
//         </div>
//     </div>
    
//     <div className={css.block}>
//         <div className={css.detail}>
//             <span>Resources</span>
//             <span className={css.pngLine}>
//                 <LinkIcon className={css.icon} />
//                 <p>Safety Privacy and Terms</p>
//             </span>
//         </div>
//     </div>
// </div> 