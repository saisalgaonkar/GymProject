import "./Testimonial.css";
import { testimonialsData } from "../../data/testimonialsData.js";
import React, { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import {motion} from "framer-motion"

export default function Testimonial() {
  const [selected, setSelected] = useState(0);
  const transition={type:"spring", duration: 1}
  const tLength = testimonialsData.length;
  return (
    <div className="Testimonial" id="testimonials">
      {/* left side */}
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
        key={selected}
        transition={transition}
        initial={{opacity: 0, x:-100}}
        animate={{opacity: 1, x:0}}
        exit={{opacity: 0, x:-100}}
        >{testimonialsData[selected].review}</motion.span>
        <span style={{ paddingBottom: "2rem" }}>
          <span style={{ color: "var(--lightgreen)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          <span>-- {testimonialsData[selected].status}</span>
        </span>
      </div>

      {/* right side */}
      <div className="right-t">
        <motion.div
        transition={{...transition,duration:2}}
        initial={{opacity: 0,x: -100}}
        whileInView={{opacity: 1, x:0}}
        >
        </motion.div>
        
        <motion.div
        transition={{...transition,duration:2}}
        initial={{opacity: 0,x: 100}}
        whileInView={{opacity: 1, x:0}}
        >
        </motion.div>
        
        <motion.img
        key={selected}
        transition={transition}
        initial={{opacity: 0, x:100}}
        animate={{opacity: 1, x:0}}
        exit={{opacity: 0, x:-100}}
        src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          {/* left arrow */}
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          {/* right arrow */}
          <img
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
