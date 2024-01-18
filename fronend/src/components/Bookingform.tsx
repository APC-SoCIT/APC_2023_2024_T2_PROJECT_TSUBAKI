import { useState } from 'react';
 
function Bookingform() {

    const [style1a, setStyle1a] = useState("bookform-1a-show");
    const [style1b, setStyle1b] = useState("bookform-1b-hide");

    const showForm1a = () => {
        setStyle1a("bookform-1a-show");
        setStyle1b("bookform-1b-hide");
    };
    const showForm1b = () => {
        setStyle1a("bookform-1a-hide");
        setStyle1b("bookform-1b-show");
    };
    return (
      <section>
        <div className="bookform-content">
            <div className="bookform-head">
                <h2>Choose appointment type</h2>
                <div className="bookform-head-butts">
                    <button onClick={showForm1a}>START NEW TRANSACTION</button>
                    <button onClick={showForm1b}>FOLLOW-UP EXISTING TRANSACTION</button>
                </div>
            </div>
            <div className="bookform-container">
                <div className={style1a}>
                    <p>STEP 1: Choose service/s to avail</p>
                    <form>
                        <div className="leftside">
                            <input type="checkbox" id="sec" name="sec" value="sec" />
                            <label htmlFor="sec">SEC Related Work </label><br />
                            <input type="checkbox" id="dti" name="dti" value="dti" />
                            <label htmlFor="dti"> DTI Registration</label><br />
                            <input type="checkbox" id="bir" name="bir" value="bir" />
                            <label htmlFor="bir"> BIR Related Work</label><br />
                            <input type="checkbox" id="ltt" name="ltt" value="ltt" />
                            <label htmlFor="ltt"> Land Title Transfer</label><br />
                            <input type="checkbox" id="bp" name="bp" value="bp" />
                            <label htmlFor="bp">Business Permits</label><br />
                        </div>
                        <div className="rightside">
                            <input type="checkbox" id="sss" name="sss" value="sss" />
                            <label htmlFor="sss"> SSS Related Work</label><br />
                            <input type="checkbox" id="sec" name="sec" value="sec" />
                            <label htmlFor="sec">PHILHEALTH Related work </label><br />
                            <input type="checkbox" id="dti" name="dti" value="dti" />
                            <label htmlFor="dti"> PAG-IBIG Related work</label><br />
                            <input type="checkbox" id="bir" name="bir" value="bir" />
                            <label htmlFor="bir"> Notarial Serivces</label><br />
                            <input type="checkbox" id="ltt" name="ltt" value="ltt" />
                            <label htmlFor="ltt"> Business Consultation</label><br />
                        </div>
                    </form>
                </div>
                <div className={style1b}>
                    <p>STEP 1: Choose meeting type</p>
                    <form>
                        <input type="checkbox" id="sec" name="sec" value="sec" />
                        <label htmlFor="sec"> Follow-up Consultation</label><br />
                        <input type="checkbox" id="dti" name="dti" value="dti" />
                        <label htmlFor="dti"> Discussion of Changes</label><br />
                        <input type="checkbox" id="bir" name="bir" value="bir" />
                        <label htmlFor="bir"> Payment Discussion</label><br />
                        <input type="checkbox" id="ltt" name="ltt" value="ltt" />
                        <label htmlFor="ltt"> Transaction Cancellation</label><br />
                    </form>
                </div>
                <div className="bookform-a">
                    <div className="bookform-2">
                        <p>STEP 2: Choose Appointment Type</p>
                        <form>
                            <input type="radio" id="ol" name="ol" value="ol" />
                            <label htmlFor="ol"> Online</label><br />
                            <input type="radio" id="f2f" name="f2f" value="f2f" />
                            <label htmlFor="f2f"> Face-to-Face</label>
                        </form>
                    </div> <br />
                    <div className="bookform-3">
                        <p>STEP 3: Choose Appointment Date & Time</p>
                        <form>
                            <label htmlFor="book-date">Date:</label>
                            <input type="date" id="book-date" name="book-date"></input>
                            <label htmlFor="gender">Timeslot: </label>
                            <select id="timeslot" name="timeslot">
                                <option value="8-9">8:30AM-9:30AM</option>
                                <option value="9-11">9:30AM-11:30AM</option>
                                <option value="1-3">1:30PM-3:30PM</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bookform-submit-button">
                <button>Book Appointment</button>
            </div>    
        </div> 
      </section>
    )
  }



export default Bookingform;