function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h3>Contact Request</h3>

        <div className="email-pill">
          <span>Enter your email to be contacted</span>
          <button>→</button>
        </div>
      </div>

      <div className="footer-main">
        <h2>
          Fiber
          <br />
          Family
        </h2>

        <div className="footer-links">
          <div>
            <h4>Socials</h4>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>Media</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>phone number: +45 26 32 62 03</p>
            <p>email: info@fiber-family.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom"></div>
    </footer>
  )
}

export default Footer