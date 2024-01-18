function Navbar() {
    return (
      <header>
        <div className="logo">
            <a href="index.html"><img src="../Media/VIS-ONLY-2.png" height="100vh"></img></a>
            <a href="index.html"><img src="../Media/TEXT-ONLY-2.png" height="100vh"></img></a>
        </div>
        <div className="options">
            <a href="about-us.html">About Us</a>
            <a href="serv-pack.html">Service Packages</a>
            <a href="contact.html">Contact Us</a>
            <a href="login.html">Log In/Sign Up</a>
        </div>
      </header>
    );
  }

export default Navbar;