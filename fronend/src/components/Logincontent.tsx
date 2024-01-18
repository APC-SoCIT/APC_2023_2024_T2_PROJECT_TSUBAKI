function Logincontent() {
    return (
      <section>
        <div className="logpage-content">
            <div className="login-left">
              <div className="logo-login">
                  <img src="../Media/VIS-TEXT.png"></img>
              </div>
              <div className="login-form">
                <form>
                  <label htmlFor="username">Username: </label>
                  <input type="text" id="username" name="username" value="username"></input><br></br>
                  <label htmlFor="passwd">Password: </label>
                  <input type="text" id="password" name="password"></input><br></br>
                </form>
              </div>
              <div className="login-butt">
                <button>Log In</button>
              </div>
              <div className="login-butt-alt">
                <a href=".">Forgot password?</a>
                <h4>or login with:</h4>
                <div className="butts">
                  <button><img src="../Media/google.png" /></button>
                  <button><img src="../Media/fb.png" /></button>
                </div>
              </div>
            </div>
            <div className="login-right">
              <h1>Looking to get started?</h1>
              <a href="signup.html">Sign up here<br></br>for free!</a>
            </div>
        </div>
      </section>
    );
  }
  

export default Logincontent;