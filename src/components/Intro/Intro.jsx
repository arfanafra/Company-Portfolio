import "./intro.scss"
import { BsChevronDown } from "react-icons/bs";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      strings: ["our team"],
      showCursor: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2500,
    })
  }, [])
  return (
    <div className="intro" id="intro">
      <div className="introImage">
        <div className="imgContainer">
          <img src="assets/Welcoming a new hire.svg" alt="" />
        </div>
      </div>
      <div className="introTitle">
        <div className="introText">
          <h2>hi there!</h2>
          <h1>Welcome</h1>
          <h3>to <span ref={textRef}></span></h3>
        </div>
        <a className="wrapper" href="#aboutUs"><BsChevronDown /></a>
      </div>
    </div>
  )
}
