import React, { useState, useEffect } from "react";
import "./Banner.css";


function Banner() {

  const [BannerContent, setBannerContent] = useState();
  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("role") === "admin") {
        setBannerContent(
          
          
        );
      } else if (localStorage.getItem("role") === "user") {
        setBannerContent(
         
        );
      } else {
        setBannerContent(
          <div>
            <div id="slides" class="cover-slides">
              <ul class="slides-container">
                <li class="text-center">
                  <img src="assets/images/tenderImage1.jpg" alt="" />
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <h1 class="m-b-20">
                          <strong>
                            Welcome To <br /> Tenders
                          </strong>
                        </h1>
                        <h1 class="m-b-40">Bid your Tenders</h1>
                        <p>
                          <a
                            class="btn btn-lg btn-circle btn-outline-new-white"
                            href="#"
                          >
                            Learn More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="text-center">
                  <img src="assets/images/tenderImage2.jpg" alt="" />
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <h1 class="m-b-20">
                          <strong>
                            Welcome To <br /> Tenders
                          </strong>
                        </h1>
                        <h1 class="m-b-40">Bid your Tenders</h1>
                        <p>
                          <a
                            class="btn btn-lg btn-circle btn-outline-new-white"
                            href="#"
                          >
                            Learn More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="text-center">
                  <img src="assets/images/tenderImage3.jpg" alt="" />
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <h1 class="m-b-20">
                          <strong>
                            Welcome To <br /> Tenders
                          </strong>
                        </h1>
                        <h1 class="m-b-40">Bid your Tenders</h1>
                        <p>
                          <a class="btn btn-lg btn-circle btn-outline-new-white" href="#">
                            Learn More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="slides-navigation">
                <a href="#" class="next">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </a>
                <a href="#" class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        );
      }
    }, 2000);
  }, []);
  return (
    <div>
      {BannerContent}
    </div>
      );
}

export default Banner;
