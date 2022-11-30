import React from 'react';
import css from './Hero.module.css';
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs';
import HeroImg from '../assets/hero.png';
import {motion} from 'framer-motion';

const Hero = () => {
    const transition ={duration:3,type:"spring"}

    return (
    <div className={css.container} id ="home">

        <div className={css.h_sides}>
            <span className={css.text1}>
                skin protection cream
            </span>
            <div className={css.text2}>
                <span>Trendy Collection</span>
                <span>Speedily say suitabke disposal and boy . Exercise joy man, chill and rejoice</span>
            </div>
        </div>

        {/* middle side and hero */}
        <div className={css.wrapper}>
            <motion.div
            initial={{bottom:"2rem"}}
            whileInView={{bottom:"0rem"}}
            transition={transition}
            className={css.blueCircle}>
            </motion.div>
            <motion.img
            trsansition={transition}
            initial={{bottom:"-2rem"}}
            whileInView={{bottom:"0rem"}}
            src={HeroImg} alt="" width={600}/>
            <motion.div 
            transition={transition}
            intial={{right:"4%"}}
            whileInView={{right:"2%"}}
            className={css.cart2}>
                <RiShoppingBagFill/>
                <div className={css.signup}>
                    <span>Best SignUp Offers</span>
                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* right side */}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5m</span>
                <span>Monthly Traffic</span>
            </div>
        </div>
        <div className={css.customers}>
            <span>100k</span>
            <span>Happy customers</span>
        </div>

    </div>
)
}

export default Hero