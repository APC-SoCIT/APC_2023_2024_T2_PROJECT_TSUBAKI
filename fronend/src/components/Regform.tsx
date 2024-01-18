function Regform() {
    return (
      <section>
        <div className="regform-content">
            <div className="formis">
              <div className="regform">
                <h4>Account Details</h4>
                <form id="account">
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" name="email" value="email"></input>
                    <label htmlFor="username" id="usname">Username: </label>
                    <input type="text" id="username" name="username" value="username"></input><br />
                    <label htmlFor="passwd">Password: </label>
                    <input type="text" id="password" name="password"></input>
                    <label htmlFor="passwdcon" id="passwdcon">Confirm Password: </label>
                    <input type="text" id="password" name="password"></input><br></br>
                </form>
                <h4>General Information</h4>
                <form id="gen-info">
                    <label htmlFor="fname" id="fnamelabel">First Name: </label>
                    <input type="text" id="fname" name="fname" value="First Name"></input>
                    <label htmlFor="mname">Middle Name: </label>
                    <input type="text" id="mname" name="mname" value="Middle Name"></input>
                    <label htmlFor="lname">Last Name: </label>
                    <input type="text" id="lname" name="lname" value="Last Name"></input><br></br>
                    <label htmlFor="gender">Gender: </label>
                        <select id="gender" name="gender">
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Other/Prefer not to say</option>
                        </select>
                    <label htmlFor="birthday">Birthday:</label>
                    <input type="date" id="birthday" name="birthday"></input>
                    <label htmlFor="contactno">Contact Number: </label>
                    <input type="number" id="contactno" name="contactno"></input><br></br>
                    <label htmlFor="address">Address :</label><br />
                    <div id="address-1">
                        <input type="text" id="address" name="blno" value="Building/Block No."></input>
                        <input type="text" id="address" name="str" value="Street"></input>
                        <input type="text" id="address" name="brgy" value="Barangay"></input>
                    </div>
                    <br />
                    <div id="address-2">
                        <input type="text" id="address" name="city" value="City"></input>
                        <input type="text" id="address" name="reg" value="Region"></input>
                        <input type="text" id="address" name="zip" value="Postal/ZIP Code"></input>
                    </div>
                </form>
              </div>
              <div className="reg-butt">
                <button>Submit for Registration</button>
              </div>
            </div>
        </div>
    </section>
    )
}

export default Regform;