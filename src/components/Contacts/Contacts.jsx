import "./contacts.scss"

export default function Contacts() {
  return (
    <div className="contacts" id="contacts">
      <h1>Contact Us</h1>
      <div className="container">
        <div className="left">
          <div className="name">
            <h2>Name</h2>
            <input type="text" />
          </div>
          <div className="e-mail">
            <h2>Email</h2>
            <input type="email" />
          </div>
          <div className="message">
            <h2>Message</h2>
            <textarea></textarea>
          </div>
          <button type="submit">Send Message</button>
        </div>
        <div className="right">
          <div className="text">
            <h2>LET'S WORK TOGETHER</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
