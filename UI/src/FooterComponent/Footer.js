import './Footer.css';
import React ,{useEffect, useState} from 'react';

function Footer() {

  const [FooterContent, setFooterContent] = useState();
  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("role") === "admin" || localStorage.getItem("role") === "user") {
        setFooterContent(
          <div>
            {/* Start Footer */}
              <div className="copyright">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="company-name" style={{'color':'white'}} >
                        All Rights Reserved. &copy; 2023 <a>Tenders</a> Design
                        By :<a>Tender</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            {/* End Footer */}
          </div>
        );
      } 
       else {
        setFooterContent(
          <div>
            {/* Start Footer */}
            <footer className="footer-area bg-f">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <h3>About Us</h3>
                    <p>
                      Integer cursus scelerisque ipsum id efficitur. Donec a dui
                      fringilla, gravida lorem ac, semper magna. Aenean rhoncus
                      ac lectus a interdum. Vivamus semper posuere dui, at
                      ornare turpis ultrices sit amet. Nulla cursus lorem ut
                      nisi porta, ac eleifend arcu ultrices.
                    </p>
                  </div>
                
                  <div className="col-lg-3 col-md-6">
                    <h3>Contact information</h3>
                    <p className="lead">Skycrapers, skycity, India</p>
                    <p className="lead">
                      <a>XXX XXX XXXX</a>
                    </p>
                    <p>
                      <a> tenders@gmail.com</a>
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <h3>Subscribe</h3>
                    <div className="subscribe_form">
                      <form className="subscribe_form">
                        <input
                          name="EMAIL"
                          id="subs-email"
                          className="form_input"
                          placeholder="Email Address..."
                          type="email"
                        />
                        <button type="submit" className="submit">
                          SUBSCRIBE
                        </button>
                        <div className="clearfix"></div>
                      </form>
                    </div>
                    <ul className="list-inline f-social">
                      <li className="list-inline-item">
                        <a>
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a>
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a>
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a>
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a>
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="copyright">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="company-name">
                        All Rights Reserved. &copy; 2023 <a>Tenders</a> Design
                        By :<a>Tender</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* End Footer */}
          </div>
        );
      }
    }, 2000);
  }, []);
  return (
    <div>
      {FooterContent}
    </div>
   
  );
}

export default Footer;
