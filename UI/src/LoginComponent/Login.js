import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { _apiURLUser } from "../apiURl";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    var userDetails = { email: email, password: password };
    axios
      .post(_apiURLUser + "login", userDetails)
      .then((response) => {
        // console.log(response.data);

        const responseData = response.data.userdetails;
        // console.log(responseData);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("_id", responseData._id);
        localStorage.setItem("name", responseData.name);
        localStorage.setItem("email", responseData.email);
        localStorage.setItem("mobile", responseData.mobile);
        localStorage.setItem("address", responseData.address);
        localStorage.setItem("city", responseData.city);
        localStorage.setItem("role", responseData.role);

        if (responseData.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/user");
        }

        // responseData.role==="admin"?navigate("/admin"):navigate("/user");
      })
      .catch((error) => {
        setOutput("Invalid user or verify your account....");
        setEmail("");
        setPassword("");
      });
  };
  return (
    <div>
      <div class="page-content">
        <div class="form-v4-content">
          <div class="form-left">
            <h2>INFOMATION</h2>
            <p class="text-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              molestie ac feugiat sed. Diam volutpat commodo.
            </p>
            <p class="text-2">
              <span>Eu ultrices:</span> Vitae auctor eu augue ut. Malesuada nunc
              vel risus commodo viverra. Praesent elementum facilisis leo vel.
            </p>
            <div class="form-left-last">
              <input
                type="submit"
                name="account"
                class="account"
                value="Register Here"
              />
            </div>
          </div>
          <form class="form-detail" onSubmit={handleSubmit}>
            <h2>User Login</h2>
            <font style={{ color: "blue" }}>{output}</font>

            <div class="form-row">
              <label for="your_email">Your Email</label>
              <input
                type="text"
                name="your_email"
                id="your_email1"
                class="input-text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div class="form-row">
              <label for="your_email">Password</label>
              <input
                type="password"
                name="your_email"
                id="your_email"
                class="input-text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div class="form-row-last">
              <input
                type="submit"
                name="register"
                class="register"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
