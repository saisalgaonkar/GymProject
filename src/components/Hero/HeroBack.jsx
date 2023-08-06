import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

// import all images
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from "framer-motion"
// animate number from start to end
import NumberCounter from 'number-counter'


export default function Hero() {
  const transition={type:"spring", duration: 3}
  // calculate the width of the screen
  const mobile = window.innerWidth<=768 ? true:false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      {/* left side section */}
      <div className="left-h">
        <Header />
        {/* the best ad section */}
        <div className="the-best-ad">
          <motion.div
          initial={{left: mobile?"178px": '238px'}}
          whileInView={{left: '8px'}}
          transition={{...transition, type: 'tween'}}
          >  
          </motion.div>
          <span>The best fitness club in the town</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your file to fullest
            </span>
          </div>
        </div>
        {/* figures  */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix='+'/>
            </span>
            <span>Expert coachs</span>
          </div>
          <div>
            <span>
            <NumberCounter end={978} start={800} delay='4' preFix='+'/>
            </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50} start={20} delay='3' preFix='+'/>
            </span>
            <span>Fitness programs</span>
          </div>
        </div>
        {/* here are the butoons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/* right side section */}
      <div className="right-h">

        <button className="btn">Join Now</button>

        <motion.div
        transition={transition}
        initial={{right: "-1rem"}}
        whileInView={{right: "4rem"}}
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span className="heart-bpm"></span>
        </motion.div>

        <img src={hero_image} alt="" className="hero-image"/>
        <motion.img
        transition={transition}
        initial={{right: '8rem'}}
        whileInView={{right: '23rem'}}
        src={hero_image_back} alt="" className="hero-image-back"/>
        
        {/* calories */}
        <motion.div 
        transition={transition}
        initial={{right: '30rem'}}
        whileInView={{right: '50rem'}}
        className="calories">
            <img src={Calories} alt="" />
            <div className="card">
            <span>Calories Burned  </span>
             <span>220 Kcal</span>
            </div>
            
        </motion.div>
      </div>
    </div>
  );
}
