import "./Header.css";
import Auth from "../AuthComponent/Auth";
import React, { useState, useEffect } from "react";

function Header() {
  const [HeaderContent, setHeaderContent] = useState();

  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("role") === "admin") {
        setHeaderContent(
          <div>
            {/* <!-- Start Contact info --> */}
            <div className="contact-imfo-box">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="overflow-hidden">
                      <h4>Welcome to admin panel</h4>
                      <span style={{ color: "white" }}>
                        {localStorage.getItem("email")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Contact info --> */}
          </div>
        );
      } else if (localStorage.getItem("role") === "user") {
        setHeaderContent(
          <div>
            {/* <!-- Start Contact info --> */}
            <div className="contact-imfo-box">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="overflow-hidden">
                      <h4>Welcome to User panel</h4>
                      <span style={{ color: "white" }}>
                        {localStorage.getItem("email")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Contact info --> */}
          </div>
        );
      } else {
        setHeaderContent(
          <div>
            {/* Start Contact info  */}
            <div className="contact-imfo-box">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <i className="fa fa-volume-control-phone"></i>
                    <div className="overflow-hidden">
                      <h4>Phone</h4>
                      <p className="lead">XXX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <i className="fa fa-envelope"></i>
                    <div className="overflow-hidden">
                      <h4>Email</h4>
                      <p className="lead">tenders@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <i className="fa fa-map-marker"></i>
                    <div className="overflow-hidden">
                      <h4>Location</h4>
                      <p className="lead">Skycrapers, skycity, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Contact info  */}
          </div>
        );
      }
    }, 2000);
  }, []);

  return (
    <div>
      <Auth />
      {HeaderContent}
    </div>
  );
}

export default Header;
