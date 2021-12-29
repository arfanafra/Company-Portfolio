import "./topbar.scss"
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">FUTURE.</a>
          <div className="itemContainer">
            <ul>
              <li>
                <a href="#aboutUs">About Us</a>
                <a href="#works">Works</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contacts">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div> */}
      </div>
    </ div>
  )
}