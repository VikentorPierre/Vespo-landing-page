import React, { Component, Fragment } from "react";
import "./home.css";
import dataImg from "../data-1.gif";
import customizeImg from "../customizable.gif";
import smallBus from "../smallBusCus.jpg";
import discovery from "../Social.gif";
import customer from "../customer.jpg";
import facebookIcon from "../facebookIcon.png";
import axios from "axios";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      success: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/hello", this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ name: "", email: "" });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }
  render() {
    const sectionStyle = {
      backgroundImage: `url(${smallBus})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };
    const divStyle = {
      display: "flex",
      justifyContent: "center"
    };
    const footerStyle = {
      backgroundColor: "white"
    };
    return (
      <Fragment>
        <main className="main-content ">
          <section style={sectionStyle} className="sec">
            <div className="container hero">
              <div className="row row-center">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <h1 className="hero-text">
                    Solution for customer's loyalty, retention, and engagement
                  </h1>
                </div>
              </div>
              <div className="row row-center">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <p className="point-text">
                    Vespo allows customers to follow your reward membership with
                    a familiar social media like ease.
                  </p>
                </div>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="curve"
              data-name="Layer 1"
              preserveAspectRatio="none"
              viewBox="0 0 170.08 10.63"
            >
              <path
                className="cls-1"
                d="M170.08,10.63H0V5S18,16.1,85,5s85.12,0,85.12,0Z"
                transform="translate(0 0)"
              />
            </svg>
          </section>

          <section className="sub-hero">
            <div className="container">
              <div className="row row-center">
                <h1 className="sub-hero-text">With Vespo Brands Enjoy</h1>
              </div>
            </div>
          </section>

          <section className="feature company-feature">
            <div className="container">
              <div className="row point">
                <div className="col-lg-4 offset-lg-0">
                  <img src={customizeImg} className="img" alt="customizable" />
                  <h2 className="point-title"> Simple & customizable </h2>
                  <p className="point-text">
                    Vespo's easy to use templates allows for customizable
                    rewards and deals. Lanch a new campaign as simple as posting
                    on facebook.
                  </p>
                </div>
                <div class="col-lg-4 offset-lg-0">
                  <img
                    src={discovery}
                    className="img"
                    alt="promotion & Discovery"
                  />
                  <h2 className="point-title"> promotion & Discovery </h2>
                  <p className="point-text">
                    Vespo promotes customer discovery and allows customers to
                    follow company updates and deals.
                  </p>
                </div>
                <div class="col-lg-4 offset-lg-0">
                  <img src={dataImg} className="img" alt="image here" />
                  <h2 className="point-title"> data & trends analytics </h2>
                  <p className="point-text">
                    Gain insightful data on customers habits and trends then
                    utilize that knowledge to achieve a competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className=" customer-section sub-hero">
            <div className="container">
              <div className="row row-center">
                <h1 className="sub-hero-text">Customers Enjoy</h1>
              </div>
            </div>
          </section>
          <section className=" feature cus-feature">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <img src={customer} height="400px" width="500px" alt="" />
                </div>
                <div className="col-lg-6 customer-points">
                  <div>
                    <h2 className="info-title"> customer section title </h2>
                    <p>
                      "Loyalty is a relationship based-notion; it's not a
                      function of points or coupons." Loyalty is now customer
                      centric. Vespo acknowledges this. More than points, Vespo
                      allows personal insight with your customers, nurturing a
                      more intimate relationship."
                    </p>
                  </div>
                  <div>
                    <h2 className="info-title"> customer section title </h2>
                    <p>
                      "81% of surveyed customers won't download apps, even to
                      their favorite restaurants." Now they don't have to. Vespo
                      allows customers to follow your reward membership with a
                      familiar social media-like feel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className=" feature cus-feature call-to-action-layer"
            id="callAction"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12" style={divStyle}>
                  <form
                    class="form-inline"
                    onSubmit={this.handleFormSubmit}
                    action=""
                  >
                    <div class="form-group mx-sm-3 mb-2">
                      {/* <label for="inputPassword2" class="sr-only">Password</label> */}
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Business Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                      {/* <label for="inputPassword2" class="sr-only">Password</label> */}
                      <input
                        type="email"
                        class="form-control"
                        id="inputPassword2"
                        placeholder="Email Address"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer-section">
          <div className="container">
            <div className="row row-center">
              <div className="col-lg-4">
                © <span> Vespo </span> 2018 Copyright{" "}
                <a href="">
                  <img
                    src={facebookIcon}
                    className="social-Icon"
                    alt="facebook"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default LandingPage;
