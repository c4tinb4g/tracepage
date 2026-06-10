function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Fiber Family</h1>

      <div className="nav-links">
        <a>About</a>
        <a>Browse</a>
        <a>Contact</a>
        <a>Trace</a>
        <a>Expertise</a>
      </div>

      <button className="login-button">Sign up/Log in</button>
    </nav>
  );
}

export default Navbar;