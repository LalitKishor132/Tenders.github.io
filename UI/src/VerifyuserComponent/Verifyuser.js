import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { _apiURLUser } from "../apiURl";
import axios from "axios";

function Verifyuser() {
  const Navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    var updateDetails = {
      condition: {
        email: params.email,
        __v: 0,
      },
      set: { status: 1, __v: 1 },
    };
    axios.patch(_apiURLUser + "update", updateDetails).then((result) => {
      console.log("User verified Successfully....");
      console.log(result);
    });
  }, []);

  return (
    <div>
      <Navigate to="/" />
    </div>
  );
}

export default Verifyuser;
