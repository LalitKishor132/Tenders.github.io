import './Service.css';
function Service() {
  return (
    <div >
      {/* Start About  */}
      <div className="about-section-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                src="assets/images/aboutimage.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <div className="inner-column">
                <h1>
                  Welcome To <span>Tenders,Service page</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque auctor suscipit feugiat. Ut at pellentesque ante,
                  sed convallis arcu. Nullam facilisis, eros in eleifend luctus,
                  odio ante sodales augue, eget lacinia lectus erat et sem.{" "}
                </p>
                <p>
                  Sed semper orci sit amet porta placerat. Etiam quis finibus
                  eros. Sed aliquam metus lorem, a pellentesque tellus pretium
                  a. Nulla placerat elit in justo vestibulum, et maximus sem
                  pulvinar.
                </p>
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

export default Service;
