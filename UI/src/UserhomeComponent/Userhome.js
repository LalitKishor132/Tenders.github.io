import "./Userhome.css";
// import Auth from '../AuthComponent/Auth'

function Userhome() {
  return (
    <div>
     
      {/* Start About  */}
      <div className="about-section-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center"></div>

            <section class="vh-100" style={{ "background-color": "#f4f5f7;" }}>
              <h1>
                Welcome to{" "}
                <span style={{ "text-transform": "uppercase" }}>
                  {localStorage.getItem("name")}
                </span>
              </h1>
              <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col col-lg-6 mb-4 mb-lg-0">
                    <div
                      class="card mb-3"
                      style={{ "border-radius": ".5rem;" }}
                    >
                      <div class="row g-0">
                        <div
                          class="col-md-4 gradient-custom text-center text-white"
                          style={{
                            "border-top-left-radius":
                              ".5rem; border-bottom-left-radius: .5rem;",
                          }}
                        >
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="Avatar"
                            class="img-fluid my-5"
                            style={{ width: "80px;" }}
                          />
                          <h1
                            style={{
                              color: "white",
                              "text-transform": "uppercase",
                            }}
                          >
                            {localStorage.getItem("name")}
                          </h1>
                          {/* <p>Web Designer</p>
                          <i class="far fa-edit mb-5"></i> */}
                        </div>
                        <div class="col-md-8">
                          <div class="card-body p-4">
                            <h6>Information</h6>
                            <hr class="mt-0 mb-4" />
                            <div class="row pt-1">
                              <div class="col-6 mb-3">
                                <h6>Email</h6>
                                <p class="text-muted">
                                  {localStorage.getItem("email")}
                                </p>
                              </div>
                              <div class="col-6 mb-3">
                                <h6>Phone</h6>
                                <p class="text-muted">
                                  {localStorage.getItem("mobile")}
                                </p>
                              </div>
                            </div>
                            <h6>Address</h6>
                            <hr class="mt-0 mb-4" />
                            <div class="row pt-1">
                              <div class="col-6 mb-3">
                                <h6>Address</h6>
                                <p class="text-muted">
                                  {" "}
                                  {localStorage.getItem("address")}
                                </p>
                              </div>
                              <div class="col-6 mb-3">
                                <h6>City</h6>
                                <p class="text-muted">
                                  {" "}
                                  {localStorage.getItem("city")}
                                </p>
                              </div>
                            </div>
                            {/* <div class="d-flex justify-content-start">
                              <a href="#!">
                                <i class="fab fa-facebook-f fa-lg me-3"></i>
                              </a>
                              <a href="#!">
                                <i class="fab fa-twitter fa-lg me-3"></i>
                              </a>
                              <a href="#!">
                                <i class="fab fa-instagram fa-lg"></i>
                              </a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <div className="inner-column table-responsive">
                {/*  <table className="table table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Role</th>
                  </tr>

                  <tr>
                    <td>{localStorage.getItem("name")}</td>
                    <td>{localStorage.getItem("email")}</td>
                    <td>{localStorage.getItem("mobile")}</td>
                    <td>{localStorage.getItem("address")}</td>
                    <td>{localStorage.getItem("city")}</td>
                    <td>{localStorage.getItem("role")}</td>
                  </tr>
                </table> */}
                {/* <a className="btn btn-lg btn-circle btn-outline-new-white">
                  Learn more
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About */}
    </div>
  );
}

export default Userhome;
