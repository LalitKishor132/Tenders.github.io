import "./Viewsub.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { _apiURLCategory, _apiURLSubCategory } from "../apiURl";
import { Link, useParams } from "react-router-dom";
// import Auth from  '../AuthComponent/Auth';

function Viewsub() {
  const params = useParams();
  const [scDetails, setSCategoryDetails] = useState([]);

  useEffect(() => {
    axios.get(_apiURLSubCategory + "fetch?sub").then((result) => {
      setSCategoryDetails(result.data);
    });
  }, []);
  return (
    <div>
      {/* <Auth /> */}
      {/* Start About  */}
      <div className="about-section-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12"></div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <h1>
                SubCategory List:<h1 className="Name">{params.catname}</h1>
              </h1>

              <div className="inner-column">
                <center>
                  <div id="category_list">
                    {scDetails.map((ele) => {
                      const image =
                        "/assets/uploads/subcaticons/" + ele.subcaticonnm;
                      const path = "/viewsub/" + ele.subcatnm;
                      return (
                        <Link to={path}>
                          <div class="category_part">
                            <img
                              src={image}
                              height="100"
                              width="150"
                              alt="laoding..."
                            />
                            <br />
                            <b>{ele.subcatnm}</b>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About */}
    </div>
  );
}

export default Viewsub;
