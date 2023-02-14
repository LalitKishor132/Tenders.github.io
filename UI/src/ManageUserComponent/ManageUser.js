import "./ManageUser.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { _apiURLUser } from "../apiURl";
function ManageUser() {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    axios.get(_apiURLUser + "fetch?role=user").then((result) => {
      setUserDetails(result.data);
    });
  }, []);

  const manageUserStatus = (_id, s) => {
    var updateDetails;
    if (s == "verify") {
      updateDetails = { "condition": { "_id": _id }, "set": { "status": 1 } };
      axios.patch(_apiURLUser + "update", updateDetails).then((result) => {
        window.location.reload();
      })
    } else if (s == "block") {
      updateDetails = { "condition": { "_id": _id }, "set": { "status": 0 } };
      axios.patch(_apiURLUser+"update", updateDetails).then((result) => {
        window.location.reload();
      })
    } else {
      axios.delete(_apiURLUser + "delete/" + _id).then((result) => {
        window.location.reload();
      });
    }
  };

  return (
    <div>
      <div className="about-section-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12"></div>
            {/* <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <div className="inner-column"> */}
            <h1>View & ManageUsers</h1>
            <div className="table-responsive">
              <table className="table table-dark">
                <tr>
                  <th>UserId</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Password</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

                {userDetails.map((row) => (
                  <tr>
                    <td>{row._id}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.mobile}</td>
                    <td>{row.password}</td>
                    <td>{row.city}</td>
                    <td>{row.address}</td>
                    <td>{row.role}</td>

                    <td>
                      {row.status == 0 && (
                        <a
                          style={{ color: "green" }}
                          onClick={()=> {
                            manageUserStatus(row._id, "verify");
                          }}
                        >
                          Verify User
                        </a>
                      )}
                      {row.status == 1 && (
                        <a
                          style={{ color: "orange" }}
                          onClick={() => {
                            manageUserStatus(row._id, "block");
                          }}
                        >
                          Block User
                        </a>
                      )}
                    </td>
                    <td>
                      <a
                        style={{ color: "red" }}
                        onClick={() => {
                          manageUserStatus(row._id, "delete");
                        }}
                      >
                        Delete User
                      </a>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
            {/* </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUser;
