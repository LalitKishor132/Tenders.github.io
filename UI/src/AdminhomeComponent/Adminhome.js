import "./Adminhome.css";
// import Auth from  '../AuthComponent/Auth';


function Adminhome() {
  return(
    <div>
      {/* <Auth /> */}
      {/* Start About  */}
      <div className="about-section-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img src="assets/images/aboutimage.png" alt="Loading" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <div className="inner-column">
                <h1>
                  Welcome To <span>Tenders Admin Panel page</span>
                </h1>
                <a className="btn btn-lg btn-circle btn-outline-new-white">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About */}
    </div>
  );
}

export default Adminhome;
