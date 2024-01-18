function AboutUs() {
  const organization = "ACMR Services";

  return (
    <div className="about-us">
      <div className="img-company">
        <div className="about-company">
          <h1>
            <strong>About ACMR Services</strong>
          </h1>
          <p>
            ACMR Services is a budding business assistance group active since
            March of 2023, focused on providing legwork and processing services
            to their respective clients, such as DTI Registration, SEC
            Registration and Amendments, BIR Works, and Land Transfers among
            others.
          </p>
        </div>
      </div>
      {
        <div className="service-block">
          <div className="service-head">
            <h1>
              <strong>About Our Services</strong>
            </h1>
          </div>
          <div className="card col-12 col-md-6 col-lg-4">
            <div className="card-img pb-3">
              <img src="https://cdn-icons-png.flaticon.com/512/4585/4585036.png"></img>
            </div>
            <div className="card-box">
              <h4>Securely Share</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ullamcorper elementum felis in bibendum. Proin vitae turpis
                ipsum.
              </p>
            </div>
          </div>
          <div className="card col-12 col-md-6 col-lg-4">
            <div className="card-img pb-3">
              <img src="https://cdn-icons-png.flaticon.com/512/3908/3908041.png"></img>
            </div>
            <div className="card-box">
              <h4>Transparent Communication & Collaboration</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ullamcorper elementum felis in bibendum. Proin vitae turpis
                ipsum.
              </p>
            </div>
          </div>
          <div className="card col-12 col-md-6 col-lg-4">
            <div className="card-img pb-3">
              <img src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"></img>
            </div>
            <div className="card-box">
              <h4>Real-Time Notifications</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ullamcorper elementum felis in bibendum. Proin vitae turpis
                ipsum.
              </p>
            </div>
          </div>
        </div>
      }
      <div className="about-employee">
        <div className="meet-employee">
          <h2>
            Meet <br />
            Our <br />
            <strong>Employees</strong>
          </h2>
          <p>ACMR Services Team</p>
        </div>
        <div className="employee-list">
          {/* Carousel */}
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-label="Slide 1"
                aria-current="true"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className=""
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                  width="800"
                  height="400"
                  src="https://i.ibb.co/zSMjGpT/sad.png"
                  alt="First slide"
                />
                <div className="carousel-caption">
                  <h1>Linden Alva</h1>
                  <p>
                    email: linden.alva@student.apc.edu.ph
                    <br />
                    phone: 09453694522
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                  width="800"
                  height="400"
                  src="https://i.redd.it/jqt9q5252uj71.jpg"
                  alt="Second slide"
                />
                <div className="carousel-caption">
                  <h3>Second Slide</h3>
                  <p>Some description for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                  width="800"
                  height="400"
                  src="https://i.redd.it/cvz9cemrglo71.jpg"
                  alt="Third slide"
                />
                <div className="carousel-caption">
                  <h3>Third Slide</h3>
                  <p>Some description for the third slide.</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
