import "./testimonials.scss"
import { userTestimonials } from "../../data"

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {userTestimonials.map(data => (
          <div className="card">
            <div className="top">
              <div className="left">
                <img src={data.img} alt="" />
              </div>
              <div className="right">
                <h1>{data.name}</h1>
                <p>- {data.role}</p>
              </div>
            </div>
            <div className="bottom">
              <p>"{data.testimonial}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
