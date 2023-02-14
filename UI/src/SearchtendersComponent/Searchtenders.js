import "./Searchtenders.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { _apiURLCategory } from "../apiURl";
import { Link, useParams } from "react-router-dom";

function Searchtenders() {
  
  const params = useParams();
  const [cDetails, setCDetails] = useState([]);
  useEffect(() => {
    axios.get(_apiURLCategory + "fetch").then((result) => {
      setCDetails(result.data);
    });
  }, []);

  return (
    <div>
      {/* Start About  */}
      <div className="about-section-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center"></div>
            <center>
              <h1>Category List</h1>

              <div id="category_list">
                {cDetails.map((ele) => {
                  const image = "/assets/uploads/caticons/" + ele.caticonnm;
                  const path = "/viewsub/" + ele.catnm;
                  return (
                    <Link to={path}>
                      <div class="category_part">
                        <img src={image} height="100" width="150" alt="laoding..." />
                        <br />
                        <b>{ele.catnm}</b>
                      </div>
                    </Link>
                  );
                })}
                {/* {cDetails.map((row) => {
                  const Image = "assets/uploads/caticons/" + row.caticonnm;
                  const path ='/viewsub'+ row.catnm;
                  return (
                    <Link to={path} className="Link">
                      <div className="category_part">
                        <img
                          src={Image}
                          alt="loading"
                          height="100px"
                          width="190px"
                        />

                        <div className="rowmaterial">{row.catnm}</div>
                      </div>
                    </Link>
                  );
                })} */}
              </div>
            </center>
          </div>
        </div>
      </div>
      {/* End About */}
    </div>
  );
}

export default Searchtenders;
