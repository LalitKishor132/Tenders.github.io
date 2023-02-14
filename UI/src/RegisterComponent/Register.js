import "./Register.css";

import { useState } from "react";
import axios from "axios";
import { _apiURLUser } from "../apiURl";

function Register() {
  const [output, setOutput] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();


  const handleSubmit = (event) => {
    event.preventDefault();
    var userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city}
     axios.post(_apiURLUser+"save",userDetails).then((result) => {
      //  console.log(result);
      if(result.data.status)
        setOutput("User register successfully");
      else
      setOutput("User registration failed");


       setName('');
       setEmail('');
       setPassword('');
       setAddress('');
       setCity('');
       setMobile(''); 
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
                value="Have An Account"
              />
            </div>
          </div>
          <form class="form-detail" onSubmit={handleSubmit}>
            <h2>REGISTER FORM</h2>
            <font style={{ color: "blue" }}>{output}</font>

            <div class="form-group">
              <div class="form-row form-row">
                <label for="first_name">Name</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  class="input-text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div class="form-row">
              <label for="your_email">Your Email</label>
              <input
                type="text"
                name="your_email"
                id="your_email"
                class="input-text"
               
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              />
            </div>
            <div class="form-row">
              <label for="your_email">mobile</label>
              <input
                type="text"
                name="your_email"
                id="your_email"
                class="input-text"
               
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div class="form-group">
              <div class="form-row form-row">
                <label for="password">address</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  class="input-text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  
                />
              </div>
             
              <div class="form-row">
                <label for="your_email">city</label>
                <input
                  type="text"
                  name="your_email"
                  id="your_email"
                  class="input-text"
                 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

    
            </div>
            <div class="form-checkbox">
              <label class="container">
                <p>
                  I agree to the <a class="text">Terms and Conditions</a>
                </p>
                <input
                  type="checkbox"
                  name="checkbox"
                 
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="form-row-last">
              <input
                type="submit"
                name="register"
                class="register"
                value="Register"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
