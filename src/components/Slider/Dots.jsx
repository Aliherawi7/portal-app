import React from "react"
import "./Slider.css"
const Dots = ({ activeIndex, onclick, imageSlider }) => {
  return (
    <div className="all_dots display_flex justify_content_center">
      {imageSlider.map((item, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active_dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  )
}

export default Dots
