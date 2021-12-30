import "./works.scss"
import { RiSmartphoneLine, RiComputerLine, RiLayout2Line, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useState } from "react";
import { works } from "../../data"

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
      setCurrentSlide(currentSlide < works.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {works.map(d => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>{d.category}</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow left" onClick={() => handleClick("left")}>
        <RiArrowLeftSLine />
      </div>
      <div className="arrow right" onClick={() => handleClick("right")}>
        <RiArrowRightSLine />
      </div>
    </div >
  )
}
